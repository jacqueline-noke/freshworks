import { ApplicationDataType } from "./ApplicationDataType";
import { ApplicationDataTypes } from "./ApplicationDataTypes";

/**
 * Provides methods that enables an application to retrieve product data. 
 * 
 * \- [Data methods](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/data-method/)
 */
export interface ApplicationDataApi {
  channel: MessagePort;

  /**
   *The identifier of the instance.
   */
  readonly instanceId: string;

  /**
   * Gets a record of the specified type.
   * @param key - The key of the record.
   * 
   * @returns An object containing data of the specified record.
  */
  get<Key extends string>(key: Key): Promise<ApplicationDataType<Key>>;

  /**
   * Gets a record of the specified key.
   * @param key - The key of the record.
   * 
   * @returns An object containing data of the specified record.
  */
  get<Key extends ApplicationDataTypes>(key: Key): Promise<ApplicationDataType<Key>>;

  /**
   * Gets the name of the service.
   */
  readonly service: string;

  /**
   * Gets the timeout duration for the `get(...)` function.
   */
  readonly timeout: number;
}