/**
* 时间服务
*/
module rigger.service{
	export class TimeService extends AbsService{
		constructor(){
			super();
		}

		public static get instance():TimeService{
			return TimeService.getRunningService<TimeService>(TimeService.serviceName);
		}

		/**
		 * 服务名
		 */
		public static serviceName:string = "TimeService";

		/**
		 * 服务器时间
		 */
		public get serverTime():number{
			return this.getServerTime();
		}

		/**
		 * 本地时间
		 */
		public get localTime():number{
			return this.getLocalTime();
		}

		@rigger.utils.DecoratorUtil.makeExtendable(true)
		public loop(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean, jumpFrame?: boolean){
			
		}

		@rigger.utils.DecoratorUtil.makeExtendable(true)
		public once(delay: number, caller: any, method: Function, args?: Array<any>, coverBefore?: boolean){
		}

		@rigger.utils.DecoratorUtil.makeExtendable(true)		
		public clear(caller:any, method:Function){
			
		}

		@rigger.utils.DecoratorUtil.makeExtendable(true)		
		public clearAll(caller:any){
			
		}

		@rigger.utils.DecoratorUtil.makeExtendable()
		public getServerTime():number{
			return this.savedServerTime + this.getLocalTime() - this.lastSettingServerTime;
		}

		@rigger.utils.DecoratorUtil.makeExtendable()
		public getLocalTime():number{
			return 0;
		}

		protected savedServerTime:number = 0;
		protected lastSettingServerTime:number = 0;
		public setServerTime(t:number):void{
			this.savedServerTime = t;
			this.lastSettingServerTime = this.getLocalTime();
		}

		

		/**
		 * 服务启动时的回调
		 * @param {ServerHandler} resultHandler 由服务启动者传递的一个回调句柄，当服务启动成功时，服务提供者应该以"true"参数回调，否则以"false"参数回调
		 * @param {any[]} startupArgs 启动参数
		 * 
		 * @example resultHandler.runWith([true]) 启动成功
		 */
		protected onStart(resultHandler:RiggerHandler, startupArgs:any[]):void{
			resultHandler.success();
		}

		/**
		 * 停止服务时的回调
		 * @param {ServerHandler} resultHandler 由服务启动者传递的一个回调句柄，当服务启动成功时，服务提供者应该以"true"参数回调，否则以"false"参数回调
		 * @example resultHandler.runWith([true]) 服务停用成功
		 */
		protected onStop(resultHandler:RiggerHandler):void{
			resultHandler.success();
			
		}

		/**
		 * 启动服务时的回调
		 * @param {ServerHandler} resultHandler 由服务启动者传递的一个回调句柄，当服务重启成功时，服务提供者应该以"true"参数回调，否则以"false"参数回调
		 * @example resultHandler.runWith([true]) 重启
		 */
		protected onReStart(resultHandler:RiggerHandler):void{
			resultHandler.success();
		}
	}
}