/**
* 适用于LAYA的定时插件 
*/
module rigger.service{
	export class LayaTimerPlugin extends AbsServicePlugin{
		constructor(){
			super();
		}

		public loop(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean, jumpFrame?: boolean){
			Laya.timer.loop(delay, caller, method, args, coverBefore, jumpFrame);
		}

		public once(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean){
			Laya.timer.once(delay, caller, method, args, coverBefore);
		}

		public clear(caller:any, method:Function){
			Laya.timer.clear(caller, method);
		}

		public clearAll(caller:any){
			Laya.timer.clearAll(caller);
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