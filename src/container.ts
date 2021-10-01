import { getAppConfig } from "./config"
import { getAppLinks } from "./links"
import { pokeDexApiClient, randomUserApi } from "./services/api/createApiClient"
import { createPokeDexApiClient, createRandomUserApi } from "./services/api/createAppApiClient"

const config = getAppConfig()
const links = getAppLinks()
const apiClient = createPokeDexApiClient(pokeDexApiClient())
const randomUserClient = createRandomUserApi(randomUserApi())

export const getAppContainer = () => ({
  config,
  links,
  apiClient,
  randomUserClient,
})
