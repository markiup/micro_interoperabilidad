import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-strategy';
import { Request } from 'express';

@Injectable()
export class HeaderApiKeyStrategy extends PassportStrategy(
  Strategy,
  'api-key',
) {
  constructor(private readonly configService: ConfigService) {
    super();
  }
  authenticate(req: Request) {
    const apiKey: string = (req.headers['x-api-key'] as string) || '';
    const configuredApiKey = this.configService.get<string>('API_KEY');
    if (apiKey && apiKey === configuredApiKey) {
      this.success(true); // Indica éxito
    } else {
      this.fail(401); // Indica fallo - 401 Unauthorized
    }
  }

  validate(): boolean {
    return true; // Se llama para satisfacer la interfaz pero no es necesario para la validacion.
  }
}
