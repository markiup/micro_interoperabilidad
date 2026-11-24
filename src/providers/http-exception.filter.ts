/* eslint-disable prettier/prettier */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    
     const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message: any = null;
    if (exception instanceof HttpException) {
      const resp = exception.getResponse();

      // Puede ser string o un objeto
      if (typeof resp === 'string') {
        message = resp;
      } else {
        message = resp['message'] || resp;
      }
    } else {
      // Error genérico: Error, TypeError, SyntaxError...
      message = exception.message || 'Error interno del servidor';
    }

    const metodo = this.metodoDesdeStackTrace(exception.stack || '');
    const mensajeFinal = parseErrorMessage(message || exception.message);


    const respuestaError = {
      user: request.headers.user||0,
      status: status,
      success: false,
      message: mensajeFinal,
      methodName: metodo,
    }
    console.log(respuestaError)
    response.status(status).json(respuestaError);
  }

  private metodoDesdeStackTrace(stackTrace: string): string {
    const match = stackTrace.match(/at (.+?) \(/);
    return match ? match[1] : 'No se pudo determinar el nombre del método';
  }
}

function parseErrorMessage(message: any) {
  if (typeof message === 'string') return message;
  if (Array.isArray(message)) return message.join(', ');
  if (typeof message === 'object') {
    return message.message ?? 'Error interno del servidor';
  }
  return 'Error interno del servidor';
}
