class C3Model {
   dataSourceType: string = 'fake';

   read() {
      let data = [
         ['data1', 30],
         ['data2', 120],
      ];

      let data2 = [{
         date: 'x',
         data1: 'data1',
         data2: 'data2'
      },{
         date: '2013-01-01',
         data1: 30,
         data2: 130
      },{
         date: '2013-01-02',
         data1: 200,
         data2: 340
      },{
         date: '2013-01-03',
         data1: 100,
         data2: 200
      },{
         date: '2013-01-04',
         data1: 400,
         data2: 500
      },{
         date: '2013-01-05',
         data1: 150,
         data2: 250
      },{
         date: '2013-01-06',
         data1: 250,
         data2: 350
      }];

      let data3 = [{
         data1: 'data1',
         data2: 'data2'
      },{
         data1: 30,
         data2: 130
      },{
         data1: 200,
         data2: 100
      },{
         data1: 100,
         data2: 140
      },{
         data1: 400,
         data2: 200
      },{
         data1: 150,
         data2: 150
      },{
         data1: 250,
         data2: 50
      }];

      let data4 = [{
         data1: "setosa_x",
         data2: "versicolor_x",
         data3: "setosa",
         data4: "versicolor"
      },{
         data1: 3.5,
         data2: 3.2,
         data3: 0.2,
         data4: 1.4
      },{
         data1: 3.0,
         data2: 3.2,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.2,
         data2: 3.1,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.1,
         data2: 2.3,
         data3: 0.2,
         data4: 1.3
      },{
         data1: 3.6,
         data2: 2.8,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.9,
         data2: 2.8,
         data3: 0.4,
         data4: 1.3
      },{
         data1: 3.4,
         data2: 3.3,
         data3: 0.3,
         data4: 1.6
      },{
         data1: 3.4,
         data2: 2.4,
         data3: 0.2,
         data4: 1.0
      },{
         data1: 2.9,
         data2: 2.9,
         data3: 0.2,
         data4: 1.3
      },{
         data1: 3.1,
         data2: 2.7,
         data3: 0.1,
         data4: 1.4
      },{
         data1: 3.7,
         data2: 2.0,
         data3: 0.2,
         data4: 1.0 
      },{
         data1: 3.4,
         data2: 3.0,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.0,
         data2: 2.2,
         data3: 0.1,
         data4: 1.0
      },{
         data1: 3.0,
         data2: 2.9,
         data3: 0.1,
         data4: 1.4
      },{
         data1: 4.0,
         data2: 2.9,
         data3: 0.2,
         data4: 1.3
      },{
         data1: 4.4,
         data2: 3.1,
         data3: 0.4,
         data4: 1.4
      },{
         data1: 3.9,
         data2: 3.0,
         data3: 0.4,
         data4: 1.5
      },{
         data1: 3.5,
         data2: 2.7,
         data3: 0.3,
         data4: 1.0
      },{
         data1: 3.8,
         data2: 2.2,
         data3: 0.3,
         data4: 1.5
      },{
         data1: 3.8,
         data2: 2.5,
         data3: 0.3,
         data4: 1.1
      },{
         data1: 3.4,
         data2: 3.2,
         data3: 0.2,
         data4: 1.8
      },{
         data1: 3.7,
         data2: 2.8,
         data3: 0.4,
         data4: 1.3
      },{
         data1: 3.6,
         data2: 2.5,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.3,
         data2: 2.8,
         data3: 0.5,
         data4: 1.2
      },{
         data1: 3.4,
         data2: 2.9,
         data3: 0.2,
         data4: 1.3
      },{
         data1: 3.0,
         data2: 3.0,
         data3: 0.2,
         data4: 1.4
      },{
         data1: 3.4,
         data2: 2.8,
         data3: 0.4,
         data4: 1.4
      },{
         data1: 3.5,
         data2: 3.0,
         data3: 0.2,
         data4: 1.7
      },{
         data1: 3.4,
         data2: 2.9,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.2,
         data2: 2.6,
         data3: 0.2,
         data4: 1.0
      },{
         data1: 3.1,
         data2: 2.4,
         data3: 0.2,
         data4: 1.1
      },{
         data1: 3.4,
         data2: 2.4,
         data3: 0.4,
         data4: 1.0
      },{
         data1: 4.1,
         data2: 2.7,
         data3: 0.1,
         data4: 1.2
      },{
         data1: 4.2,
         data2: 2.7,
         data3: 0.2,
         data4: 1.6
      },{
         data1: 3.1,
         data2: 3.0,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.2,
         data2: 3.4,
         data3: 0.2,
         data4: 1.6
      },{
         data1: 3.5,
         data2: 3.1,
         data3: 0.2,
         data4: 1.5
      },{
         data1: 3.6,
         data2: 2.3,
         data3: 0.1,
         data4: 1.3
      },{
         data1: 3.0,
         data2: 3.0,
         data3: 0.2,
         data4: 1.3
      },{
         data1: 3.4,
         data2: 2.5,
         data3: 0.2,
         data4: 1.3
      },{
         data1: 3.5,
         data2: 2.6,
         data3: 0.3,
         data4: 1.2
      },{
         data1: 2.3,
         data2: 3.0,
         data3: 0.3,
         data4: 1.4
      },{
         data1: 3.2,
         data2: 2.6,
         data3: 0.2, 
         data4: 1.2
      },{
         data1: 3.5,
         data2: 2.3,
         data3: 0.6, 
         data4: 1.0
      },{
         data1: 3.8,
         data2: 2.7,
         data3: 0.4, 
         data4: 1.3
      },{
         data1: 3.0,
         data2: 3.0,
         data3: 0.3, 
         data4: 1.2
      },{
         data1: 3.8,
         data2: 2.9,
         data3: 0.2, 
         data4: 1.3
      },{
         data1: 3.2,
         data2: 2.9,
         data3: 0.2, 
         data4: 1.3
      },{
         data1: 3.7,
         data2: 2.5,
         data3: 0.2, 
         data4: 1.1
      },{
         data1: 3.3,
         data2: 2.8,
         data3: 0.2,
         data4: 1.3
      }];

      if(this.dataSourceType == 'fake'){
         return [data, data2, data3, data4];
      }
   }
}