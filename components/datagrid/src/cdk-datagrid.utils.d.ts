import { HiddenItemPayload, ItemPayload } from './cdk-datagrid-data.manager';
/**
 * experimental
 * @param itemDefault
 * @param itemPayloadDefault
 */
export declare const itemPayloadFactory: <Item>(itemDefault: Item, itemPayloadDefault?: Partial<ItemPayload<Item>>) => (item: Item, itemPayload?: Partial<ItemPayload<Item>>) => Item;
/**
 * setItemPayload sets an itemPayload on item in hidden-type-mode.
 * This means there is no direct access to itemPayload on returned item with TypeScript.
 * The advantage of this approach is that you can put implementation details
 * at type level in a hidden-type-mode so that it allows carry payload with an item.
 *
 * To get the itemPayload you should use getItemPayloadValue or getItemPayload.
 */
export declare const setItemPayload: <Item>(item: Item, itemPayload?: Partial<ItemPayload<Item>>) => Item;
/**
 * getItemPayloadValue returns a specific itemPayloadValue of an item by given key.
 */
export declare const getItemPayloadValue: <Item, ItemPayloadKeys extends keyof ItemPayload<Item>, ItemPayloadValue extends ItemPayload<Item>[ItemPayloadKeys]>(item: Item, key: ItemPayloadKeys) => ItemPayloadValue;
/**
 * getItemPayload returns itemPayload which is in hidden-type-mode
 */
export declare const getItemPayload: <Item>(item: Item) => Readonly<ItemPayload<Item>>;
export declare const getItemData: <Item>(item: Item) => object;
/**
 * deleteItemPayload deletes the hidden item payload
 */
export declare const deleteItemPayload: <Item>(item: Partial<HiddenItemPayload<Item>>) => Item;
/**
 * hasItemPayload returns true if item has hidden item payload
 */
export declare const hasItemPayload: <Item>(item: Item) => boolean;
export declare const throwError: (message: string) => never;
export declare const ErrorItemPayload: (item: unknown) => Error;
