test("should be men older then 90 ",()=>{
    const ages=[18,20,22,1,100,90,14]



    const oldAges=ages.filter( age =>age>90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0] ).toBe(100)

})
test("should take courses chipper 160",()=>{
    const courses=[
        {title:"css",price:110},
        {title:"JS",price:200},
        {title:"REACT",price:150},
    ]


   const cheapCourses=courses.filter(course=>course.price<160)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title ).toBe("css")

})
test("get only completed task",()=>{
  const tasks=[
      {id:1,title:"bread",isDone:false},
      {id:2,title:"milk",isDone:true},
      {id:3,title:"soft",isDone:false},
      {id:4,title:"sugar",isDone:true},
  ]
   const completedTasks=tasks.filter(tasks=>tasks.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id ).toBe(2)
    expect(completedTasks[1].id ).toBe(4)

})
