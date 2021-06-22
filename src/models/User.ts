import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: String,
      nullable: true,
      default: '',
    })
    email;

    @Column({
      type: String,
      nullable: true,
      default: '',
    })
    username;

    @Column({
      type: Date,
      default: null
    })
    created_at;

    @Column({
      type: Date,
      default: null
    })
    updated_at;
}