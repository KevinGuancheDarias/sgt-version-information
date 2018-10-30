import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name: 'versions'
})
export class Version {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public version: string;

    @Column({ name: 'publication_date' })
    public publicationDate: Date;
}
