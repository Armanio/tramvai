import type { ModuleType, ModuleParameters, ExtendedModule } from './module.h';
import { MODULE_PARAMETERS } from './module';
import { isExtendedModule } from './isExtendedModule';

export const getModuleParameters = (module: ModuleType | ExtendedModule) => {
  let moduleParameters: ModuleParameters;

  if (isExtendedModule(module)) {
    const main = module.mainModule[MODULE_PARAMETERS] as ModuleParameters;
    moduleParameters = { ...main };
    moduleParameters.providers = moduleParameters.providers.concat(module.providers || []);
    const importsParam = moduleParameters.imports || []; // imports не обязательный параметр
    moduleParameters.imports = importsParam.concat(module.imports || []);
  } else {
    moduleParameters = module[MODULE_PARAMETERS] as ModuleParameters;
  }

  return moduleParameters;
};
