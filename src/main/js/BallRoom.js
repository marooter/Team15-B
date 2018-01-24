var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import ReserveBall from './ReserveBall';

let imgUrl = 'https://www.picz.in.th/images/2018/01/24/Sea_Beach_Background.jpg';
export default class BallRoom extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     color:'#FFF8DC'

   };
 }

renderToolbar() {
   return (
     <Ons.Toolbar style={{backgroundColor: '#00BFFF'}}>
       <div className='center'  >จองห้องจัดเลี้ยง</div>

       <div className='right'>
         <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
           <Ons.Icon icon='ion-navicon, material:md-menu' />
         </Ons.ToolbarButton>
       </div>
     </Ons.Toolbar>
   );
 }

 showMenu() {
   this.props.showMenu();
 }

 popPage() {
   this.props.navigator.popPage();
 }

 ReserveBall() {
   this.props.navigator.pushPage({ component: ReserveBall, props: { key: 'reserveBall' } });
 }

 render() {
   return (
     <Ons.Page renderToolbar={this.renderToolbar.bind(this) } >



       <p style={{ textAlign: 'center' ,paddingLeft:'-13%'}}>

           <img src={"https://www.picz.in.th/images/2018/01/21/Gif-.gif"} style={{width: '100%'}}  />
       </p>
   <Ons.Card style={{paddingLeft:'13%',backgroundImage: 'url(' + imgUrl + ')'} }>

          <Ons.ListTitle>เลือกห้องจัดเลี้ยง</Ons.ListTitle>
          <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>
               <div style={{ textAlign: 'center' }}>
                 ROOM1
               </div>
              <div style={{ textAlign: 'center' }}>
              <img src={"https://www.img.in.th/images/8d174cb6b29a6b703685804b157952e8.jpg"} style={{width: '50%'}}  /><br/>
              <p style={{ textAlign: 'center', opacity: '0.9', paddingTop: '20px' }}>
              หากคุณกำลังมองหาห้องจัดงานสัมมนาที่ เดินทางสะดวก กว้างขวาง และเพียบพร้อม ด้วยบริการระดับดีเยี่ยมแล้วนั้น <br/>
              ยังเป็นอีกสถานที่หนึ่งที่คุณไม่พลาดพลาด เรารับประกัน ว่า คุณจะประทับใจไม่รู้ลืมอย่างแน่นอน<br/>
              รายละเอียดสถานที่จัดงาน<br/>
                   1.ทั้ง Hall รองรับคนได้ 400-500 คน Theater<br/>
                   2.มีเวทีขนาดใหญ่และจอโปรเจคเตอร์แบบครบวงจร<br/>
                   3.อุปกรณ์การจัดงานแบบเบ็ดเสร็จ<br/>
                  </p>
             <Ons.Button onClick={this.ReserveBall.bind(this, ReserveBall)}>คลิ๊กจองห้องนี้ </Ons.Button><br/><br/>


              </div>
          </Ons.Card>

         <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>
               <div style={{ textAlign: 'center' }}>
                 ROOM2
               </div>
              <div style={{ textAlign: 'center' }}>
              <img src={"https://www.img.in.th/images/8d174cb6b29a6b703685804b157952e8.jpg"} style={{width: '50%'}}  /><br/>
              <p style={{ textAlign: 'center', opacity: '0.9', paddingTop: '20px' }}>
              หากคุณกำลังมองหาห้องจัดงานสัมมนาที่ เดินทางสะดวก กว้างขวาง และเพียบพร้อม ด้วยบริการระดับดีเยี่ยมแล้วนั้น <br/>
              ยังเป็นอีกสถานที่หนึ่งที่คุณไม่พลาดพลาด เรารับประกัน ว่า คุณจะประทับใจไม่รู้ลืมอย่างแน่นอน<br/>
              รายละเอียดสถานที่จัดงาน<br/>
                   1.ทั้ง Hall รองรับคนได้ 400-500 คน Theater<br/>
                   2.มีเวทีขนาดใหญ่และจอโปรเจคเตอร์แบบครบวงจร<br/>
                   3.อุปกรณ์การจัดงานแบบเบ็ดเสร็จ<br/>
                  </p>
             <Ons.Button onClick={this.ReserveBall.bind(this, ReserveBall)}>คลิ๊กจองห้องนี้ </Ons.Button><br/><br/>
              </div>

          </Ons.Card>

          <Ons.Card  style={{backgroundColor: this.state.color, width: '85%'}}>
               <div style={{ textAlign: 'center' }}>
                 ROOM2
               </div>
              <div style={{ textAlign: 'center' }}>
              <img src={"https://www.img.in.th/images/8d174cb6b29a6b703685804b157952e8.jpg"} style={{width: '50%'}}  /><br/>
              <p style={{ textAlign: 'center', opacity: '0.9', paddingTop: '20px' }}>
              หากคุณกำลังมองหาห้องจัดงานสัมมนาที่ เดินทางสะดวก กว้างขวาง และเพียบพร้อม ด้วยบริการระดับดีเยี่ยมแล้วนั้น <br/>
              ยังเป็นอีกสถานที่หนึ่งที่คุณไม่พลาดพลาด เรารับประกัน ว่า คุณจะประทับใจไม่รู้ลืมอย่างแน่นอน<br/>
              รายละเอียดสถานที่จัดงาน<br/>
                   1.ทั้ง Hall รองรับคนได้ 400-500 คน Theater<br/>
                   2.มีเวทีขนาดใหญ่และจอโปรเจคเตอร์แบบครบวงจร<br/>
                   3.อุปกรณ์การจัดงานแบบเบ็ดเสร็จ<br/>
                  </p>
             <Ons.Button onClick={this.ReserveBall.bind(this, ReserveBall)}>คลิ๊กจองห้องนี้ </Ons.Button><br/><br/>
              </div>

          </Ons.Card>




       <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
         Thank. You!
       </p>


   </Ons.Card>
     </Ons.Page>
   );
 }
}
