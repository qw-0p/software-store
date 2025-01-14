import { CreateCategoryDto } from '@api/dto/category.dto';
import * as mapper from './mapper';
import * as categoryService from '@db/services/CategoryService';
import { ICategory } from '@api/interfaces/category.interface';
import {
  Controller,
  Route,
  Post,
  Delete,
  Body,
  Path,
  SuccessResponse,
} from 'tsoa';

@Route('category')
export default class CategoryController extends Controller {
  /**
   * Create a new category
   * @param payload Data to create category
   * @returns Created category
   */
  @SuccessResponse('201', 'Created') // Установите код HTTP 201
  @Post()
  public async create(@Body() payload: CreateCategoryDto): Promise<ICategory> {
    this.setStatus(201); // Установить HTTP статус
    return mapper.toCategory(await categoryService.create(payload));
  }

  /**
   * Удалить категорию по ID
   * @param id Идентификатор категории
   * @returns Успешность удаления
   */
  @Delete('{id}')
  public async deleteById(@Path() id: number): Promise<boolean> {
    return await categoryService.deleteById(id);
  }
}
