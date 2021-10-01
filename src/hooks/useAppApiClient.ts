import { getAppContainer } from "../container"

export const useAppApiClient = () => getAppContainer().apiClient

export const useRandomUserApiClient = () => getAppContainer().randomUserClient
