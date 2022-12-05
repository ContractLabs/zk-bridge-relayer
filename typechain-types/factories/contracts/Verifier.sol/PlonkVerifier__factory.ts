/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PlonkVerifier,
  PlonkVerifierInterface,
} from "../../../contracts/Verifier.sol/PlonkVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
      {
        internalType: "uint256[]",
        name: "pubSignals",
        type: "uint256[]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612507806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631e8e1e1314610030575b600080fd5b61004361003e3660046123fb565b610057565b604051901515815260200160405180910390f35b6000612292565b600080600184846000805b821561008b575092938183058581029091039350909181830290039081610069565b505050600181111561009c57600080fd5b505060008112156100aa5783015b9392505050565b60405181602084028301815160208301925060005b82841015610109578185527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018451830991506020850194506020840193506100c6565b6101337f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018361005e565b91506020850394506020840393508592505b828411156101cc577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018551830990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001845183098185527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe095860195909401939150610145565b5090915250505050565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018110610207576000805260206000f35b50565b61032081511461021e576000805260206000f35b61022c6102608201516101d6565b61023a6102808201516101d6565b6102486102a08201516101d6565b6102566102c08201516101d6565b6102646102e08201516101d6565b6102726103008201516101d6565b6102076103208201516101d6565b600080602085015161038085015260408501516103a085015260608501516103c085015260808501516103e085015260a085015161040085015260c085015161042085015260e085015161044085015260208301516104608501526020800183015161048085015260406020018301516104a085015260606020018301516104c085015260806020018301516104e085015260a06020018301516105008501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016101a06103808601200690508060208501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016020808601200660408501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001604060e08501200660008501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c06101208501200691508160608501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182820960a0850152507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820990508060808401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180600183030106905080610260840152806102808401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160e0610260840120068060c08501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181820991508160e08501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018183099150816101008501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018183099150816101208501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018183099150816101408501527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001818309610160850152505060806101e091909101207f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000190066101809091015250565b60017f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183606086015103010662010000096102a08301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183606086015103010662010000096102c08301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183606086015103010662010000096102e08301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183606086015103010662010000096103008301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183606086015103010662010000096103208301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183606086015103010662010000096103408301527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018360608601510301066201000009610360830152610bfe600861028084016100b1565b610260820151600191507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816102a0850151096102a08401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826102c08601510983096102c08401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826102e08601510983096102e08401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826103008601510983096103008401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826103208601510983096103208401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000180826103408601510983096103408401527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b7830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018082610360860151098309610360840152505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102a0860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160408601516102c0860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160608601516102e0860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016080860151610300860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a0860151610320860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151610340860151098303010690507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160e086015161036086015109830301069050806101a0830152505050565b60008060007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016101a08601516103208601510892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102c08601510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610260850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160208601516102e08601510990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151820890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151820890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160408601516102a08601510890507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610300850151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160008601516102a08701510990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151820990507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018183089150507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001817f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001840103069150507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000161028084015182099050806101c0840152505050565b6040518151815260208201516020820152825160408201526020830151606082015260408260808360066107d05a03fa9050806114b6576000805260206000f35b505050565b6000604051835181526020840151602082015284604082015260408160608360076107d05a03fa9150816114f3576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa91505080611524576000805260206000f35b50505050565b600060405183815284602082015285604082015260408160608360076107d05a03fa91508161155d576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa9150508061158e576000805260206000f35b5050505050565b600060405183815284602082015285604082015260408360608360076107d05a03fa9150508061158e576000805260206000f35b6101e082016115e66101e083018281518152602091820151910152565b6114b66101808401516102208401836114bb565b60008061022084017f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c086015161026086015109925061167d837f2f9794903eafcac6f08685b84db2d6427697c8eb661f75435b5ce4fa7bc730487f0fda0a2c740c1e32e8d61c9a1e089d188ef20281e4aa20da6fb186a68cd4ff6984611595565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151840992506116f4837f0d78a94cdd78545c30ce18e93e6906797bfbe336052bec8f67b93e360c7f3b2a7f1ab80c865f4b8aa3211d3cd9452a1dc1220f19536d21e13d5523d6f0344a2fa08461152a565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c086015161028086015109925061176f837f0f794becc8471366bc6f82e588cad655bad6112e67d420ba05e2ba692f7f90d67f2e16da21d4477e02689b02aa5062b7aaa4e2618080b06f9d83cd2fb1c6a9ef5e8461152a565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c08601516102a08601510992506117ea837f01f2de657ee8952415d107fe3d64a1ce0bf88404061fec95785ab56c981ff4527f2198f0a062261044c7873194b29eef38d176f85ccc62dda8adee7127aa7fdb398461152a565b60c0850151925061183d837f22459d00274437a532eb9c68cdd89949db0d4fa4c77b1fd142df6feaeeecf4517f2be13e2ba61597de9da7c349f500b97746b7c82f4fcbea80ce44b18bdca733cd8461152a565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a08601516102608601510892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a086015160020991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160a086015160030991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102a0850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160008601516102a08701510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151830991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000161018086015184089250611b188360e08601836114bb565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102c085015160208701510992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610260850151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016102e085015160208701510991507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001610280850151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016040860151830891507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016000860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160c0860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016020860151840992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000161030085015184097f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001908103069250611d60837f035d20c60e8e51aa9b4788ef622feee7e6b3f474624bcf4648d1984e0bef177a7f0ca97b546c065edfbdd1c320e007971bbb6c85a15231c6aaef56fc2b4a41e5758461152a565b611d6e610120850182611475565b60808501519250611d84836101608601836114bb565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018384099250611db9836101a08601836114bb565b611dcb60e086015160208601836114bb565b611dde61010086015160608601836114bb565b611df161012086015160a08601836114bb565b611e416101408601517eee1d6701978b017b641153c3777ce34c0058742243745f7a4de2b974c81e1b7f21f92993f8ab8d9bbbacf9c1e3d35a6769613787ec83d166baca5f7063fb98ae8461152a565b611e926101608601517f2095379b8dbfab353d8ce29328d1b0f8364e90b0ad87594a26d1c9dfecaa55207f02b3ab37e23effcbe093b87e831972e496b0f029701443f364d7aa96dae150928461152a565b6101c085015192507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018060c087015161032087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018060e087015161026087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018061010087015161028087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101208701516102a087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101408701516102c087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101608701516102e087015109840892507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001806101808701516103008701510984087f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000190810306925061203083600260018461152a565b60608501519250612046836101e08601836114bb565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000160608601516101808701510992507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000017eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b78409925061158e836102208601836114bb565b60006040516101e0830151815260206101e08401015160208201527f0bb24c54e8c84b779da507886d7557461d7e217043fe7cb7723aa0c387e63eab60408201527f0882840c4c9cb1500c4d20a71ec5362aeb31a7d561598b1527a99644622b0dcb60608201527f11d29dbf161a61469a44acff0395a6dc0d726c8160f871a635ef0ba74d72bb5860808201527f210be6df146af527e1478946cb64ea9323db4dbd8bbc832ee12238ea0beec5f560a082015261022083015160c08201526020610220840101517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47817f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47030690508060e0830152507f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101008201527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101208201527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6101408201527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa6101608201526020816101808360086107d05a03fa90511692915050565b60405161038081016040526122a68461020a565b6122b1838286610280565b6122ba816107ee565b6122c48382610f06565b6122ce8185611167565b6122d881856115c9565b6122e281856115fa565b6122eb816120c9565b61038082036040528060005260206000f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612373576123736122fd565b604052919050565b600082601f83011261238c57600080fd5b8135602067ffffffffffffffff8211156123a8576123a86122fd565b8160051b6123b782820161232c565b92835284810182019282810190878511156123d157600080fd5b83870192505b848310156123f0578235825291830191908301906123d7565b979650505050505050565b6000806040838503121561240e57600080fd5b823567ffffffffffffffff8082111561242657600080fd5b818501915085601f83011261243a57600080fd5b813560208282111561244e5761244e6122fd565b61247e817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160161232c565b828152888284870101111561249257600080fd5b828286018383013760009281018201929092529094508501359150808211156124ba57600080fd5b506124c78582860161237b565b915050925092905056fea2646970667358221220d0b4e022183dfa3acd198e1fcf95295aa5bff7c366d57e3311eef10ace05511964736f6c63430008110033";

type PlonkVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlonkVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PlonkVerifier__factory extends ContractFactory {
  constructor(...args: PlonkVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PlonkVerifier> {
    return super.deploy(overrides || {}) as Promise<PlonkVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PlonkVerifier {
    return super.attach(address) as PlonkVerifier;
  }
  override connect(signer: Signer): PlonkVerifier__factory {
    return super.connect(signer) as PlonkVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlonkVerifierInterface {
    return new utils.Interface(_abi) as PlonkVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PlonkVerifier {
    return new Contract(address, _abi, signerOrProvider) as PlonkVerifier;
  }
}