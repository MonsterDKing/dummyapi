import { Body, Controller, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {

  @Post()
  handleWebhook(@Body() payload: any): string {
    // Aquí puedes manejar la lógica relacionada con el webhook
    console.log('Payload recibido:', payload);

    // Puedes devolver una respuesta, si es necesario
    return 'Webhook recibido con éxito payload: ' + JSON.stringify(payload);
  }


}
