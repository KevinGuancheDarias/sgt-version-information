import { Component, DatabaseConnection, PostInject } from '@ts-lollipop/core';
import { Connection, Repository } from 'typeorm';

import { Version } from '../entities/version.entity';

@Component()
export class VersionComponent {
    @DatabaseConnection()
    private _connection: Connection;

    private _repository: Repository<Version>;

    @PostInject()
    public init(): void {
        this._repository = this._connection.getRepository(Version);
    }

    public findAll(): Promise<Version[]> {
        return this._repository.find();
    }
}
