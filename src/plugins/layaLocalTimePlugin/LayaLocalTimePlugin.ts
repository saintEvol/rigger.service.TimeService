/**
* name 
*/
module rigger.service{
	export class LayaLocalTimePlugin extends AbsServicePlugin{
		constructor(){
			super();
		}

		
		/**
		 * 获取本地时间的接口扩展
		 */
		public getLocalTime():number{
			return Laya.Browser.now();
		}

		/**
		 * 插件开始时的回调 
		 * @param resultHandler 
		 * @param startupArgs 
		 */
		protected onStart(resultHandler: RiggerHandler, startupArgs: any[]): void{
			resultHandler.success();
		}

		/**
		 * 插件停止时的回调 
		 * @param resultHandler 
		 */
		protected onStop(resultHandler: RiggerHandler): void{
			resultHandler.success();
		}

		/**
		 * 插件重启时的回调
		 * @param resultHandler 
		 */
		protected onRestart(resultHandler: RiggerHandler): void{
			resultHandler.success();
		}

	}
}