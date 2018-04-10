#Rxjs

## operaters
map
不会改变原始值
```javascript
    var src = Observable.range(1,5);
    var upper = src.map(val =>{
      return val*2;
    })

    upper.subscribe(this.logValue); // 2 4 6 8 10
    src.subscribe(this.logValue);    

```

filter 

```javascript
    var src = Observable.range(1,5);
    var upper = src.filter(val =>{
      return val%2 !== 0;
    })

    upper.subscribe(this.logValue); // 1 2 5
    src.subscribe(this.logValue);    
```

reduce 

```javascript
    var src = Observable.range(1,5);
    var upper = src.reduce((acc,val )=>{
      return acc+val;
    })

    upper.subscribe(this.logValue); // 15
    src.subscribe(this.logValue);    
```

unsubscribe
```javascript
    var counter = Observable.interval(1000);
    this.sub1 = counter.subscribe(this.logValue);
    this.sub2 = counter.subscribe(val =>{
      console.log('sub2'+val)
    });

  logValue(val){
    console.log(val);
  }

  test(){
    console.log("click")
    this.sub2.unsubscribe();  
  }

```