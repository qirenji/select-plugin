class	Select {
		constructor(parent='body',data='default_data',text=['省','市','区']) {
			this.parent = document.querySelector(parent);
			//获取数据
			this.data = data;
			//获取标题
			this.text = text;
			//获取每级的父元素
			this.preEle = null;
			this.cityEle = null;
			this.areaEle = null;
			//获取每级的数据
			this.pres = data.province;
			// console.log(data[0])
			this.cities = data.city;
			this.areas = data.county;
			//默认状态
			this.pIndex = -1;
			//自动初始化
			this.init();
		}
		//初始化
		init() {
			//添加html模版
			let _html = `<span>${this.text[0]}</span>:
        <select style="width:100px;" id="pre">
            <option value="-1">请选择</option>
        </select>
        <span>${this.text[1]}</span>:
        <select style="width: 100px;" id="city"></select>
        <span>${this.text[2]}</span>:
        <select style="width: 100px;" id="area"></select>`;
      this.parent.innerHTML = _html;
      this.preEle = this.parent.querySelector('#pre');
      this.cityEle = this.parent.querySelector('#city');
      this.areaEle = this.parent.querySelector('#area');
      for(let i=0; i<this.pres.length;i++){
      	let op = new Option(this.pres[i],i);
      	this.preEle.options.add(op);
      }
      //绑定第一级变化函数
      this.preEle.onchange = this.chg.bind(this);
      //绑定第二级变化函数
      this.cityEle.onchange = this.chg2.bind(this);

		}
		//选择第一级后的变化
		chg() {	
			//先清空options			
			this.cityEle.options.length = 0;
			this.areaEle.options.length = 0;
			//如果第一级未选择，则返回
			if(this.preEle.value == -1){
				return
			}
			let val = this.preEle.value;
			this.pIndex = this.preEle.value;
			let cs = this.cities[val];
			let as = this.areas[val];
			//添加第二级数据
			for(let i=0; i<cs.length; i++){
				let op = new Option(cs[i],i);
				this.cityEle.options.add(op);
			}
			//如果是直辖市
			if(cs.length == 1){
				for(let i=0; i<as.length
				; i++){
				let op = new Option(as[i],i);
				this.areaEle.options.add(op);
				}
				return
			}
			//如果是正常省份
			for(let i=0; i<as[0].length
				; i++){
				let op = new Option(as[0][i],i);
				this.areaEle.options.add(op);
			}
		}
		//选择第二级后的变化
		chg2() {
			let val = this.cityEle.selectedIndex;
			let as = this.areas[this.pIndex][val];
			this.areaEle.options.length = 0;
			for(let i=0;i<as.length;i++){
				var op = new Option(as[i],i);
				this.areaEle.options.add(op);
			}
		}

	}