import { HostDecorator, InjectionToken, OptionalDecorator, Provider, SelfDecorator, SkipSelfDecorator } from '@angular/core';
/**
 * @todo:
 * InjectionTokenName => toUpperCase() + TypeScript`a UpperCase Type
 * InjectionTokenName => camelCase to underscoreCase
 **/
type ProviderTokenMap<TokenName extends string, TokenValue, ExtName extends string> = {
    [_ in TokenName as `${string & TokenName}_${string & ExtName}`]: TokenValue;
};
type ProviderTokenFactoryReturns<TokenName extends string, TokenValue> = ProviderTokenMap<TokenName, InjectionToken<TokenValue>, 'TOKEN'> & ProviderTokenMap<TokenName, Provider, 'PROVIDER'>;
export type ConstructorDecorator = SelfDecorator | SkipSelfDecorator | OptionalDecorator | HostDecorator;
export declare const providerTokenFactory: <TokenName extends string, TokenValue>(tokenName: TokenName, tokenValue: TokenValue, decorators?: ConstructorDecorator[]) => ProviderTokenFactoryReturns<TokenName, TokenValue>;
export {};
