import { Component, DatabaseConnection, PostInject } from '@ts-lollipop/core';
import { Connection, Repository } from 'typeorm';

import { Version } from '../entities/version.entity';

@Component()
export class VersionComponent {

    private static readonly _BUGFIX_SUPPORT = 86400 * 30;
    private static readonly _SECURITY_SUPPORT = 86400 * 60;

    @DatabaseConnection()
    private _connection: Connection;

    private _repository: Repository<Version>;

    @PostInject()
    public init(): void {
        this._repository = this._connection.getRepository(Version);
    }

    public async findAll(): Promise<Version[]> {
        const versions: Version[] = await this._repository.find();
        return versions.map(current => {
            current.bugfixSupport = new Date(current.publicationDate.getTime() + VersionComponent._BUGFIX_SUPPORT * 1000);
            current.securitySupport = new Date(current.publicationDate.getTime() + VersionComponent._SECURITY_SUPPORT * 1000);
            return current;
        });
    }
}
