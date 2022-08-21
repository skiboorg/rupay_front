import { boot } from 'quasar/wrappers'
const { EraChain } = require('erachain-js-api')

const url = "https://scan.rupay.pro/api";
const rpcPort = 9066;

const config = {
  sdkMode: 'SIDE',
  rpcPort: 9077,
};

const era = new EraChain.API(url, rpcPort, config);
// export default boot(({ app }) => {
//   app.use(era)
// })

export {era}
