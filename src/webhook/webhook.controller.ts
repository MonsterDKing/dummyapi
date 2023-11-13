import { Body, Controller, Post,Get } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {

    //var to save webhooks in memory
    private webhooks: any[] = [];

  @Post()
  handleWebhook(@Body() payload: any): string {

    //save webhook in memory
    this.webhooks.push(payload);

    // Puedes devolver una respuesta, si es necesario
    return 'Webhook recibido con éxito payload: ' + JSON.stringify(payload);
  }

  //method get to get all webhooks saved
    @Get()
    async findAll(): Promise<any[]> {
        return this.webhooks;
    }


}
