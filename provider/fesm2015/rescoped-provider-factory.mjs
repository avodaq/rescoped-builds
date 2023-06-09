import { InjectionToken } from '@angular/core';

const providerTokenFactory = (tokenName, tokenValue, decorators = []) => {
    const decoratorInstances = decorators.map(decorator => new decorator());
    const injectionToken = new InjectionToken(tokenName);
    const provider = {
        provide: injectionToken,
        deps: [[...decoratorInstances, tokenValue]],
        useFactory: function useFactory(instance) {
            return instance;
        },
    };
    return {
        [`${tokenName}_TOKEN`]: injectionToken,
        [`${tokenName}_PROVIDER`]: provider,
    };
};

/**
 * Generated bundle index. Do not edit.
 */

export { providerTokenFactory };
//# sourceMappingURL=rescoped-provider-factory.mjs.map
