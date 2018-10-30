import {
    Controller,
    Get
} from '@ts-lollipop/core/dist/adapters/controller';
import { Security } from '@ts-lollipop/core/dist/adapters/controller-security';
import { ViewInformation } from '@ts-lollipop/core/dist/adapters/controller/pojos/view-information';
import { Inject } from '@ts-lollipop/core';
import { VersionComponent } from '../components/version.component';
import { isoDate } from '../view-functions/iso-date.function';

/**
 * It's the default controller
 *
 * @author Kevin Guanche Darias <kevin@kevinguanchedarias.com>
 * @export
 * @class DefaultController
 */
@Controller()
@Security.excludeClass()
export class DefaultController {

    @Inject()
    private _versionComponent: VersionComponent;

    @Get('')
    public async index(): Promise<ViewInformation> {
        return new ViewInformation('index', {
            versions: await this._versionComponent.findAll(),
            isoDate
        });
    }
}
