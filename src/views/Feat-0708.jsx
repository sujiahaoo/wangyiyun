// import { areaList } from '@vant/area-data';
// export default {
//   render() {
//     return (
//       <div>
//         <van-popup
//           v-model={this.popupVisible}
//           position="bottom"
//           style={{ height: '40%' }}
//         >
//           <van-area
//             columns-num="2"
//             confirm-button-text="完成"
//             area-list={areaList}
//             onConfirm={this.confirm}
//           />
//         </van-popup>
//       </div>
//     );
//   },
//   data() {
//     return {
//       popupVisible: true,
//     };
//   },
//   methods: {
//     confirm(e) {
//       this.popupVisible = false;
//       console.log(e);
//     },
//   },
// };

import { areaList } from '@vant/area-data';
import styled from 'styled-components-vue';
import dayjs from "dayjs"
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');
console.log(dayjs(1688733891207).fromNow());

const Wrapper = styled.div`
    .van-picker__confirm{
        color: red;
    }
`;
export default {
    render() {
        return (
            <Wrapper>
                <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }}>
                    <van-area area-list={areaList} value="110101" columns-num="2" onConfirm={this.confirm} onConfirm-button-text="完成"></van-area>
                </van-popup>
            </Wrapper >

        )
    },
    data() {
        return {
            popupVisible: true,
            // areaList: Object.freeze(areaList),
        }
    },
    methods: {
        confirm(e) {
            this.popupVisible = false;
            console.log(e);
        }
    }
}