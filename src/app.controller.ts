import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('report')
export class AppController {
  @Get('income')
  getAllReports() {
    return `<h1>Petra</h1>`;
  }
  @Get('income/:id')
  getAllReportById(@Param('id') id) {
    return id;
  }
  @Post('create')
  createReport() {
    return 'created';
  }
  @Put('update/:id')
  updateReport(@Param('id') id) {
    return 'updated ' + id;
  }
  @Delete('delete/:id')
  deleteReport(@Param('id') id) {
    return 'deleted ' + id;
  }
}
