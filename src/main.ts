import { Lollipop, DiLollipopModule } from '@ts-lollipop/core';
import { DotControllerAdapterModule } from '@ts-lollipop/dot-controller-adapter';
import { TypeOrmDatabaseAdapterModule } from '@ts-lollipop/typeorm-database-adapter';
import { Version } from './entities/version.entity';

declare const process: NodeJS.Process;

process.on('uncaughtException', error => {
    console.log(error.stack);
});

(async () => {
    const lollipop = new Lollipop('src/config.json');
    await lollipop.registerModules(
        DiLollipopModule,
        new TypeOrmDatabaseAdapterModule({
            type: 'mysql',
            database: 'sgt_version_information',
            host: '127.0.0.1',
            username: 'root',
            password: '1234',
            charset: 'utf8',
            entities: [Version],
            synchronize: true
        }),
        new DotControllerAdapterModule({
            directories: [
                './src/dot-controllers',
            ],
            viewsDirectory: './src/views',
            listenPort: 7474,
            doCacheViews: true,
            doCacheViewsInMemory: true
        })
    );
    await lollipop.init();
    console.log('Application ready');
})();
