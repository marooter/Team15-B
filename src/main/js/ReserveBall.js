
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

export default class ReserveBall extends React.Component {   
    renderToolbar() {

      return (
        <Ons.Toolbar>
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

    render() {


      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

        <Ons.Card>
           <Ons.Card>

        <h3>*ข้อมูลการติดต่อ</h3>
          <form >
             <div>
                  <label>ชื่อ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;
                  <label>นามสกุล:</label>
                <div>
                 <input type="text"  />
                  &ensp;&ensp;&ensp;
                 <input type="text"  />
                </div>
             </div>
             <br/>
             <div>
                  <label>หน่วยงาน/บริษัท:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;
                <div>
                 <input type="text"  size="48"/>
                </div>
             </div>
             <br/>
             <div>
                  <label>ที่อยู่:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;
                <div>
                 <textarea type="text"  size="100"/>
                </div>
             </div>
             <br/>
             <div>
                  <label>อีเมลล์ของคุณ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;
                <div>
                 <input type="text"  size="48"/>
                </div>
             </div>
              <br/>
             <div>
                  <label>โทรศัพท์:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  <label>มือถือ:</label>
                <div>
                 <input type="text"  />
                  &ensp;&ensp;&ensp;
                 <input type="text"  />
                </div>
             </div>
             <br/>


          </form>
            </Ons.Card>


            <Ons.Card>
            <h3>*รายละเอียดของงาน</h3>
          <form >
             <div>
                <label>ชื่องาน:</label>
                 <div>
                  <input type="text" size="48" />
                 </div>
             </div>
             <br/>
             <div>
                <label>จำนวนผู้เข้าร่วมงาน:</label>
                 <div>
                  <input type="text" size="10" />
                 </div>
             </div>
             <br/>
             <div>
                  <label>วันเริ่มการจัดงาน:</label> &ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  <label>วันสิ้นสุดการจัดงาน:</label>
                <div>
                 <input type="text"  />
                  &ensp;&ensp;&ensp;
                 <input type="text"  />
                </div>
             </div>
             <br/>

          </form>

            </Ons.Card>
        </Ons.Card>

        </Ons.Page>
      );
    }
  }
