import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ShopingCart extends Model {
  @Column
  boiler_manufacturer: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  parts_manufacturer: string;

  @Column
  name: string;

  @Column
  image: string;

  @Column({ defaultValue: 0 })
  in_stock: number;

  @Column({ defaultValue: 0 })
  count: number;

  @Column({ defaultValue: 0 })
  total_price: number;

  @Column
  userId: number;

  @Column({ defaultValue: 0 })
  partId: number;
}
