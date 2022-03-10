# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [0.1.1-rc.0](https://github.com/logto-io/js/compare/v0.1.0...v0.1.1-rc.0) (2022-03-10)


### Bug Fixes

* add `publishConfig` to packages ([a809e25](https://github.com/logto-io/js/commit/a809e257982f7d3c31f104fa5daf983c535adfc5))



## 0.1.0 (2022-03-10)


### ⚠ BREAKING CHANGES

* **js:** initialize js/js package (#122)

### Features

* add license ([#42](https://github.com/logto-io/js/issues/42)) ([89fb076](https://github.com/logto-io/js/commit/89fb076b4c400adf3a0556af10f3f76466bf5e7f))
* **browser-sample:** add browser sample pages ([ebc990d](https://github.com/logto-io/js/commit/ebc990d1407a6c6967ce5cc9e9a50158b9d1a3b9))
* **browser-sample:** init package ([10076e1](https://github.com/logto-io/js/commit/10076e15e6c491c2584cb8a0269f0d7bfddef526))
* **browser:** add LogtoClient constructor ([0a09559](https://github.com/logto-io/js/commit/0a09559e25eb2badcfe390ad0e99756c8ef96f1c))
* **browser:** add LogtoClient constructor ([#160](https://github.com/logto-io/js/issues/160)) ([d738c0b](https://github.com/logto-io/js/commit/d738c0b842476f1ba72e0acd1ee1dd79d0689ce0))
* **browser:** browser end user information getters ([b93ebe4](https://github.com/logto-io/js/commit/b93ebe40c04fc76c365b72761a05a01416e4bee2))
* **browser:** check if sign-in redirect URI has been redirected ([3baabcf](https://github.com/logto-io/js/commit/3baabcff3776ef9be5064870b979a517df4c1fd8))
* **browser:** export js core types from browser SDK ([325cfdf](https://github.com/logto-io/js/commit/325cfdf7dc61202b369d535a91fe71b81b78248c))
* **browser:** handle sign-in callback  ([#181](https://github.com/logto-io/js/issues/181)) ([58a4792](https://github.com/logto-io/js/commit/58a47924923bae27f69db6585322820c634f4688))
* **browser:** sign out ([6e85fac](https://github.com/logto-io/js/commit/6e85facc8d71d1b62e2eb57e1ffa29061fd8e68e))
* **browser:** sign-in session storage ([#175](https://github.com/logto-io/js/issues/175)) ([98120fd](https://github.com/logto-io/js/commit/98120fd69bcdbf5262972adcf5116bb97aab7c50))
* **browser:** signIn ([#170](https://github.com/logto-io/js/issues/170)) ([2418193](https://github.com/logto-io/js/commit/24181931643472318345678ec68b7e874a72fd5a))
* **client:** support node ([#96](https://github.com/logto-io/js/issues/96)) ([367ec03](https://github.com/logto-io/js/commit/367ec036dbe9d4243ca9c4544e8a67dcf31d436b))
* codeVerifier and codeChallenge ([#35](https://github.com/logto-io/js/issues/35)) ([7efe0eb](https://github.com/logto-io/js/commit/7efe0eb2d2e0cc9e543544be77af8dc5c3e10b0d))
* custom scope ([#71](https://github.com/logto-io/js/issues/71)) ([2a48b3d](https://github.com/logto-io/js/commit/2a48b3d5069cc4616d501c622947715621cae358))
* decode token ([#34](https://github.com/logto-io/js/issues/34)) ([42655d6](https://github.com/logto-io/js/commit/42655d6e7cd46c5458e41a62907fdfc719cca4bb))
* discover ([#37](https://github.com/logto-io/js/issues/37)) ([d17912e](https://github.com/logto-io/js/commit/d17912e6ee7a5c9359bf5bea69aa25e53f1b305a))
* express-server ([78b495a](https://github.com/logto-io/js/commit/78b495a115dc5cb78594df866cc557f6f4d32d96))
* getAccessToken ([#65](https://github.com/logto-io/js/issues/65)) ([9480d8b](https://github.com/logto-io/js/commit/9480d8b63e66e8e9cf1c50d3d9bc552e52aa8a7d))
* grantTokenByAuthorizationCode ([#40](https://github.com/logto-io/js/issues/40)) ([eddb25e](https://github.com/logto-io/js/commit/eddb25e26122b5a3e9f8c3ab24b58f7bf6db301c))
* grantTokenByRefreshToken ([#45](https://github.com/logto-io/js/issues/45)) ([34f0081](https://github.com/logto-io/js/commit/34f0081585fd3d1e5d5db97618a5ed072957a01b))
* handle redirect callback ([#64](https://github.com/logto-io/js/issues/64)) ([c7d0b6a](https://github.com/logto-io/js/commit/c7d0b6a53a66d531dfd6c01c5f8b0babb3ae0419))
* isLoginRedirect ([#77](https://github.com/logto-io/js/issues/77)) ([af0aa9f](https://github.com/logto-io/js/commit/af0aa9f308427d393cb8872d8680480aee3f359b))
* **js:** add CodeTokenResponse ([#186](https://github.com/logto-io/js/issues/186)) ([ece931c](https://github.com/logto-io/js/commit/ece931c3556a3fb654127ef258e25c141e27fa7a))
* **js:** add state to loginWithRedirect to prevent csrf attacking ([#94](https://github.com/logto-io/js/issues/94)) ([3d41e08](https://github.com/logto-io/js/commit/3d41e08da84c648d0dbe9926cc5a4f2f6f432a28))
* **js:** core function generateSignOutUri ([0a26ebe](https://github.com/logto-io/js/commit/0a26ebea93d08e559fb81ef930aa0e604b90b24f))
* **js:** decodeIdToken ([#128](https://github.com/logto-io/js/issues/128)) ([973708b](https://github.com/logto-io/js/commit/973708b7f3f518b85591384a6d1392b74ef71ab1))
* **js:** export in index.ts ([#159](https://github.com/logto-io/js/issues/159)) ([423c185](https://github.com/logto-io/js/commit/423c1851e6339a5069559abc564e229aa111529a))
* **js:** fetch access token by authorization code ([1160683](https://github.com/logto-io/js/commit/1160683f2eabde8f988c01cddd829fc480b54b20))
* **js:** fetchOidcConfig ([#138](https://github.com/logto-io/js/issues/138)) ([8555d16](https://github.com/logto-io/js/commit/8555d169e82d7b814b017583ad2f924b3a6ac45d))
* **js:** fetchUserInfo ([#152](https://github.com/logto-io/js/issues/152)) ([e0dca51](https://github.com/logto-io/js/commit/e0dca5153354966470c00d8c23a8066e26fb27e2))
* **js:** generate state, code verifier and code challenge ([#125](https://github.com/logto-io/js/issues/125)) ([9784f3a](https://github.com/logto-io/js/commit/9784f3a97f4d84d9945cd46b8a6a9b93b33b8964))
* **js:** implement fetchTokenByRefreshToken ([4e6600e](https://github.com/logto-io/js/commit/4e6600e6035fb2b849d224c171ca1bc29b34cb3e))
* **js:** refactor fetchTokenByRefreshToken ([#147](https://github.com/logto-io/js/issues/147)) ([f8dbcce](https://github.com/logto-io/js/commit/f8dbcce16ce9af14936807d7eb59e0d7bbde8edd))
* **js:** requester ([#137](https://github.com/logto-io/js/issues/137)) ([c86745b](https://github.com/logto-io/js/commit/c86745bab035543b3d14dc5fe1433e413d3d51f2))
* **js:** revoke ([#153](https://github.com/logto-io/js/issues/153)) ([2e554ca](https://github.com/logto-io/js/commit/2e554ca79b9ec1b140da2a81704d0e65d5a751eb))
* **js:** scopes and generateSignInUri ([#150](https://github.com/logto-io/js/issues/150)) ([c47e3ea](https://github.com/logto-io/js/commit/c47e3ea4a94c35e63e0d77bcc27438c380c657ca))
* **js:** verifyAndParseCodeFromCallbackUri ([#132](https://github.com/logto-io/js/issues/132)) ([7180b03](https://github.com/logto-io/js/commit/7180b031c53161dd3ff77115e1e0e5d3fa73b224))
* **js:** verifyIdToken ([#127](https://github.com/logto-io/js/issues/127)) ([954dc6d](https://github.com/logto-io/js/commit/954dc6d9f046e752f635248bcd87e15cf02fb63e))
* **lint:** add lint-stage to all packages ([1289e3e](https://github.com/logto-io/js/commit/1289e3e11896d4fc68bb465d94d52f7cc4e90064))
* loginWithRedirect and handleCallback ([5629e2a](https://github.com/logto-io/js/commit/5629e2afd04429d88ad5db80b514161da0474a88))
* logout ([#56](https://github.com/logto-io/js/issues/56)) ([3884ab9](https://github.com/logto-io/js/commit/3884ab9523d5821eb5d25a418c6dd10a1937f003))
* logto client ([#53](https://github.com/logto-io/js/issues/53)) ([75b5ed0](https://github.com/logto-io/js/commit/75b5ed0b4eac376406a1c6dca9f3c75246b82de6))
* memory storage ([#52](https://github.com/logto-io/js/issues/52)) ([d2fa92e](https://github.com/logto-io/js/commit/d2fa92ece27db4713ce3597f8b495772bbc065f1))
* node ([1957bf4](https://github.com/logto-io/js/commit/1957bf4c09bba98a8b8272cfb9f8a4d1156cf9a4))
* onAuthStateChange ([#82](https://github.com/logto-io/js/issues/82)) ([e8dda56](https://github.com/logto-io/js/commit/e8dda5632bb4b7ad6e0901154484ab035a699afd))
* **playground:** migrate playground to js repo ([65bc597](https://github.com/logto-io/js/commit/65bc597453fb0f16cc7bd9e329509518ce8e8680))
* protected route ([#84](https://github.com/logto-io/js/issues/84)) ([d28db7c](https://github.com/logto-io/js/commit/d28db7c98fe596a31013bda51645b129b3d0bda9))
* **react-playground:** implement react-playground ([897911d](https://github.com/logto-io/js/commit/897911dcdbd2a574374f0eb5794ac4684ec06859))
* **react-playground:** make encrypted user login info in url invisible ([#109](https://github.com/logto-io/js/issues/109)) ([13df814](https://github.com/logto-io/js/commit/13df8142d8e318a5782ec35d6661f76326b85766))
* **react-sample:** add react sample webpages ([3716789](https://github.com/logto-io/js/commit/3716789b9df75f5a0e593b43cf24a0138315e2ff))
* **react-sample:** init react sample project ([467c76a](https://github.com/logto-io/js/commit/467c76a8ced26cdb8459a729412101a6ad186824))
* **react-sdk:** update react sdk ([951d316](https://github.com/logto-io/js/commit/951d316fc6efae955b0e79a0a7cc8f80bfe91bce))
* **react:** auto handle callback ([#92](https://github.com/logto-io/js/issues/92)) ([58ee454](https://github.com/logto-io/js/commit/58ee45453780edde82d3ff8d8cb2fb00a779a8f9))
* **react:** init provider & hook ([#74](https://github.com/logto-io/js/issues/74)) ([b30e993](https://github.com/logto-io/js/commit/b30e993e3483ebcb340dd318e12e640eddf2360e))
* **react:** react SDK with context provider ([1be502d](https://github.com/logto-io/js/commit/1be502d333c25209be44bd3a34911d3546555d7f))
* redirect and login ([#30](https://github.com/logto-io/js/issues/30)) ([8758507](https://github.com/logto-io/js/commit/87585079fe168749eaaaea24ec01d05936a2abfa))
* requestLogin ([#43](https://github.com/logto-io/js/issues/43)) ([f0abbd3](https://github.com/logto-io/js/commit/f0abbd3f3e500411c131d4afc83374625113abdf))
* storage ([#49](https://github.com/logto-io/js/issues/49)) ([07ae993](https://github.com/logto-io/js/commit/07ae993d781bfb675f6b7d506fc6714a682b4bfd))
* token-set ([#48](https://github.com/logto-io/js/issues/48)) ([2e98b05](https://github.com/logto-io/js/commit/2e98b056d92b93f3fdd3e3588c3f996e715a179d))
* tokenset ([#32](https://github.com/logto-io/js/issues/32)) ([1a919bc](https://github.com/logto-io/js/commit/1a919bcd4a3a8eb903c5dae0c5066c1c4c85049f))
* transaction manager ([#51](https://github.com/logto-io/js/issues/51)) ([9aadf06](https://github.com/logto-io/js/commit/9aadf06a72309fef9abddfe5d410e8d78a3c7971))
* verifyIdToken ([#39](https://github.com/logto-io/js/issues/39)) ([f324ad9](https://github.com/logto-io/js/commit/f324ad962e28159572899a541b0e929279b0f763)), closes [#35](https://github.com/logto-io/js/issues/35)


### Bug Fixes

* `package.json` ([8afd534](https://github.com/logto-io/js/commit/8afd534e5d79db29c9ef1aa55cfa94549ea025b8))
* await generateCodeChallenge ([#63](https://github.com/logto-io/js/issues/63)) ([82f7fe0](https://github.com/logto-io/js/commit/82f7fe0bf4d47ac7d090e39ebe520c89aba5aea6))
* **browser:** getAccessToken saves refreshToken and idToken ([#191](https://github.com/logto-io/js/issues/191)) ([cb768f0](https://github.com/logto-io/js/commit/cb768f0a2b1353dbeab427b04fcd21f932a4b061))
* **browser:** isSignInRedirected should return false when session is empty ([#210](https://github.com/logto-io/js/issues/210)) ([ca4ad2c](https://github.com/logto-io/js/commit/ca4ad2c0f2ab5a723a33b9c3dae2bd76c92f9b43))
* **browser:** should use userinfo_endpoint in fetchUserInfo function ([04caf8d](https://github.com/logto-io/js/commit/04caf8d43af099a15f58d4e7653a453f56733e6d))
* **ci:** fix some dummy code ([53dc7cf](https://github.com/logto-io/js/commit/53dc7cf0a37cfbed5ef34725edebf6a8de7ce144))
* **client:** ci lint fix ([5795db1](https://github.com/logto-io/js/commit/5795db10375351fb53b6495426b83ec2c3112f38))
* **client:** cr fix ([fb8f214](https://github.com/logto-io/js/commit/fb8f2146d0c79cedf008be2daca80c2b490137c6))
* **client:** fix client sdk ([c333ca8](https://github.com/logto-io/js/commit/c333ca81540e3781dc953f5462f85dc77b9b0f1f))
* **client:** fix superstruct validation rule ([b93b9a7](https://github.com/logto-io/js/commit/b93b9a77896d50e66660f6933ca1df23ce4fba55))
* **client:** typings location ([#68](https://github.com/logto-io/js/issues/68)) ([0ee542d](https://github.com/logto-io/js/commit/0ee542dc51cd387303164cb264d216d71c7886b1))
* **client:** wrap window.location.assign ([#101](https://github.com/logto-io/js/issues/101)) ([bddc3eb](https://github.com/logto-io/js/commit/bddc3eb7f98bf23987c296a44eb7beccf8c11c3b))
* **core:** cr fix ([46671a1](https://github.com/logto-io/js/commit/46671a1a126244c5a62e423ecc7f487811bf1ccb))
* export storage ([#61](https://github.com/logto-io/js/issues/61)) ([93bf512](https://github.com/logto-io/js/commit/93bf5127432f87fcdbf175f7cba63bf06bc1b3e0))
* fix npm script typo ([d410522](https://github.com/logto-io/js/commit/d4105227c9ed9db1e0939a0dd11f0e1bb3264096))
* **js:** grant type should be 'authorization_code'  instead of 'code' ([5d416d0](https://github.com/logto-io/js/commit/5d416d0bb0901dc7fd7b79afdb504a1cdf11b901))
* **js:** response_type should be hard-coded as 'code' ([5048ae1](https://github.com/logto-io/js/commit/5048ae152f15a9fd5c2626c5e6c54d8fd327aadb))
* **js:** update lock file ([0536626](https://github.com/logto-io/js/commit/0536626c2c54e531f475baf784aeeae4786c119e))
* **js:** update node-fetch version ([8f012dd](https://github.com/logto-io/js/commit/8f012dd962e234d59a5d2e4f7397e863ee97f02d))
* **plaground:** cr fix ([2b444db](https://github.com/logto-io/js/commit/2b444db8d75414bbab0b871c9f55fa1f5560e942))
* **playgrond:** set webpack performance hint to warning ([2d81d71](https://github.com/logto-io/js/commit/2d81d71089bae979e082abf77be10ef99820555f))
* **playground:** extend package size limit ([c7aa38f](https://github.com/logto-io/js/commit/c7aa38f986dc567c3847d656248de1b7baf05adb))
* **playground:** fix playground jest evn errors ([36f6030](https://github.com/logto-io/js/commit/36f6030b387f92ce8284e7fefd461f0fd486ed2a))
* publish workflow ([#219](https://github.com/logto-io/js/issues/219)) ([1d13dab](https://github.com/logto-io/js/commit/1d13dabfcbea913c5bbcb371dc2b34082f65e604))
* **react-sample:** table style not applied issue ([#217](https://github.com/logto-io/js/issues/217)) ([2a2bf77](https://github.com/logto-io/js/commit/2a2bf779f3364eb5ccea8bddb6a51fdf0369ef2f))
* **react-sdk:** cr fix ([1fe7093](https://github.com/logto-io/js/commit/1fe709356860117ed0e5f9ed79123cb3c17727b9))
* remove useless comments ([#57](https://github.com/logto-io/js/issues/57)) ([21b6f65](https://github.com/logto-io/js/commit/21b6f658ab0a9a382f7404fdaa7b96d4b37a6c1e))
* rm unnecessary console.log in unit tests ([#70](https://github.com/logto-io/js/issues/70)) ([30f6933](https://github.com/logto-io/js/commit/30f6933db66a34253108840d0c1f701440da7623))
* tsc commonjs ([#73](https://github.com/logto-io/js/issues/73)) ([ec14c84](https://github.com/logto-io/js/commit/ec14c84bc974119cd4109fcd761bdea6b6a65d1f))
* **ut:** update jest coverage configs ([b10d84e](https://github.com/logto-io/js/commit/b10d84edbf6c1639bfaa4dbb9fa41f4a10543bde))


### Code Refactoring

* **js:** initialize js/js package ([#122](https://github.com/logto-io/js/issues/122)) ([07322cb](https://github.com/logto-io/js/commit/07322cb02dd461cc69dc1f7bf815c649e91046da))