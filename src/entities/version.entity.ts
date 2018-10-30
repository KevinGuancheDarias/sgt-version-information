import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name: 'versions'
})
export class Version {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public version: string;

    @Column({ name: 'is_published', default: true })
    public isPublished: boolean;

    @Column({ name: 'publication_date' })
    public publicationDate: Date;

    public bugfixSupport: Date;

    public securitySupport: Date;
}
