# 常用校验

## el-input校验规则
``` html
<!--校验最大输入10000,并保留小数点后两位-->
            <div class="item">
              <el-form-item prop="demo">
                <el-input v-model="demo"
                          size="mini"
                          type="number"
                          step="1"
                          min="1"
                          max="10000"
                          oninput=" if(value>10000)value=10000;if(value<0)value=1;if(isNaN(value)) { value = null } if(value.indexOf('.')>0){value=value.slice(0,value.indexOf('.')+3)}"
                       >
                  <template slot="append"></template>
                </el-input>
              </el-form-item>
            </div>
<!--自定义校验-->
demo: [ {validator: demoID, trigger: 'blur'}],
        const floorID = (rule, value, callback) => {
          let new_floor = this.A;
          let old_floor = this.B
          if (value === '' || value === null || value === undefined) {
            callback(new Error('demo不能为空'))
          } else if (new_floor > old_floor) {
            callback(new Error('A不能大于B!'))
          } else {
            callback()
          }
        }

<!--校验只可以输入数字-->
        <div>
           <el-input v-model="demo"
                              size="mini"
                              type="number"
                              step="1"
                              min="1"
                              max="10000"
                              oninput="value=value.replace(/[^\d]/g,'')
                           >
                      <template slot="append">㎡</template>
                    </el-input>
        </div>

```
## 前端分页实现
``` js
      sliceData(data, n) {
          return Array
            .from(Array(Math.ceil(data.length / n)))
            .map((_, i) => data.slice(i * n, (i + 1) * n));
        },
```
## input限制输入
``` html
<el-input @input="(e) => (param.jointTenancyPeriod = isnumber20(e))"></el-input>
```
``` js
      isnumber20(val) {
            val = val.replace(/[^0-9]/gi, "");
            // 此处还可以限制位数以及大小
            if (val > 20) {
              return 20;
            } else {
              return val;
            }
          },
```
