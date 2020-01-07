'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "link": "http://omniture.com/potenti/cras/in/purus/eu.xml?pede=magna&venenatis=ac&non=consequat&sodales=metus&sed=sapien&tincidunt=ut&eu=nunc&felis=vestibulum&fusce=ante&posuere=ipsum&felis=primis&sed=in&lacus=faucibus&morbi=orci&sem=luctus&mauris=et&laoreet=ultrices&ut=posuere&rhoncus=cubilia&aliquet=curae&pulvinar=mauris&sed=viverra&nisl=diam&nunc=vitae&rhoncus=quam&dui=suspendisse&vel=potenti&sem=nullam&sed=porttitor&sagittis=lacus&nam=at&congue=turpis&risus=donec&semper=posuere&porta=metus&volutpat=vitae&quam=ipsum&pede=aliquam&lobortis=non&ligula=mauris&sit=morbi&amet=non&eleifend=lectus&pede=aliquam&libero=sit&quis=amet&orci=diam&nullam=in&molestie=magna&nibh=bibendum&in=imperdiet&lectus=nullam&pellentesque=orci&at=pede&nulla=venenatis&suspendisse=non&potenti=sodales&cras=sed&in=tincidunt&purus=eu&eu=felis&magna=fusce&vulputate=posuere",
      "imgpath": "http://dummyimage.com/153x227.jpg/5fa2dd/ffffff"
    }, {
      "id": 2,
      "link": "https://sakura.ne.jp/volutpat/convallis/morbi/odio/odio.jsp?velit=lacus&donec=at&diam=turpis&neque=donec&vestibulum=posuere&eget=metus&vulputate=vitae&ut=ipsum&ultrices=aliquam&vel=non&augue=mauris&vestibulum=morbi&ante=non&ipsum=lectus&primis=aliquam&in=sit&faucibus=amet&orci=diam&luctus=in&et=magna&ultrices=bibendum&posuere=imperdiet&cubilia=nullam&curae=orci&donec=pede&pharetra=venenatis&magna=non&vestibulum=sodales&aliquet=sed&ultrices=tincidunt&erat=eu&tortor=felis&sollicitudin=fusce&mi=posuere&sit=felis&amet=sed&lobortis=lacus&sapien=morbi&sapien=sem&non=mauris&mi=laoreet&integer=ut&ac=rhoncus&neque=aliquet&duis=pulvinar&bibendum=sed&morbi=nisl&non=nunc&quam=rhoncus&nec=dui&dui=vel&luctus=sem&rutrum=sed&nulla=sagittis&tellus=nam&in=congue&sagittis=risus&dui=semper&vel=porta&nisl=volutpat&duis=quam&ac=pede&nibh=lobortis&fusce=ligula&lacus=sit&purus=amet&aliquet=eleifend&at=pede&feugiat=libero&non=quis&pretium=orci&quis=nullam&lectus=molestie",
      "imgpath": "http://dummyimage.com/160x212.png/dddddd/000000"
    }, {
      "id": 3,
      "link": "http://nifty.com/ipsum/primis/in/faucibus.html?malesuada=in&in=lectus&imperdiet=pellentesque&et=at&commodo=nulla&vulputate=suspendisse&justo=potenti&in=cras&blandit=in&ultrices=purus&enim=eu&lorem=magna&ipsum=vulputate&dolor=luctus&sit=cum&amet=sociis&consectetuer=natoque&adipiscing=penatibus&elit=et&proin=magnis&interdum=dis&mauris=parturient&non=montes&ligula=nascetur&pellentesque=ridiculus&ultrices=mus&phasellus=vivamus&id=vestibulum&sapien=sagittis&in=sapien&sapien=cum&iaculis=sociis&congue=natoque&vivamus=penatibus&metus=et&arcu=magnis&adipiscing=dis&molestie=parturient&hendrerit=montes&at=nascetur&vulputate=ridiculus&vitae=mus&nisl=etiam&aenean=vel&lectus=augue&pellentesque=vestibulum&eget=rutrum&nunc=rutrum&donec=neque&quis=aenean&orci=auctor&eget=gravida&orci=sem&vehicula=praesent&condimentum=id&curabitur=massa&in=id&libero=nisl&ut=venenatis&massa=lacinia&volutpat=aenean&convallis=sit&morbi=amet&odio=justo&odio=morbi&elementum=ut&eu=odio&interdum=cras&eu=mi&tincidunt=pede&in=malesuada&leo=in&maecenas=imperdiet&pulvinar=et&lobortis=commodo&est=vulputate&phasellus=justo&sit=in&amet=blandit&erat=ultrices&nulla=enim&tempus=lorem&vivamus=ipsum&in=dolor&felis=sit&eu=amet&sapien=consectetuer&cursus=adipiscing&vestibulum=elit&proin=proin&eu=interdum&mi=mauris&nulla=non&ac=ligula",
      "imgpath": "http://dummyimage.com/232x205.jpg/ff4444/ffffff"
    }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    })
    return queryInterface.bulkInsert('Posts', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', null, {});
  }
};
