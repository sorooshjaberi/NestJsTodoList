import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { get, isObject, isString, set } from 'lodash';

@Catch(HttpException)
export class WithStackFilterTsFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const httpResponse = ctx.getResponse<Response>();

    // nest message
    const errorResponse = exception.getResponse();

    let error: object;

    if (isString(errorResponse)) {
      error = {
        message: errorResponse,
      };
    } else if (isObject(errorResponse)) {
      error = {
        ...errorResponse,
      };
    }

    set(error, 'stack', get(exception, ['stack']));

    httpResponse.json(error);
  }
}
