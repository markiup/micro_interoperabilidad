import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface RequestBody {
  readonly ent_id?: string;
  readonly usr_usuario?: string;
}

function isRequestBody(body: unknown): body is RequestBody {
  return typeof body === 'object' && body !== null;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const body = isRequestBody(request.body) ? request.body : {};

    const baseResponse = {
      success: false,
      message: exception.message,
    };

    // Only add id and usuario if they exist in body
    const errorResponse = {
      ...baseResponse,
      ...(body.ent_id && { id: body.ent_id }),
      ...(body.usr_usuario && { usuario: body.usr_usuario }),
    };

    response.status(status).json(errorResponse);
  }
}
