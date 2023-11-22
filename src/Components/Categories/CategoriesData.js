const Categories = [
    {
        id:1,
        category:"Fresh Products",
        subCategories:[
            {
                id:1,
                subCategory:'halwa',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:2,
                subCategory:'suji',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:3,
                subCategory:'daal',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ]
        
    },
    {
        id:2,
        category:"Dairy",
        subCategories:[
            {
                id:1,
                subCategory:'bufollow milk',
                cover:"https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?q=80&w=2756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:2,
                subCategory:'cow milk',
                cover:"https://images.unsplash.com/photo-1523473827533-2a64d0d36748?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:3,
                subCategory:'sheep milk',
                cover:"https://plus.unsplash.com/premium_photo-1682129071833-65eed17bcf11?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ]
    },
    {
        id:3,
        category:"Beverages",
        subCategories:[
            {
                id:1,
                subCategory:'ice-cream',
                cover:"https://plus.unsplash.com/premium_photo-1666920428775-ec9ddeaae574?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:2,
                subCategory:'pestries',
                cover:"https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:3,
                subCategory:'rasaggulla',
                cover:"https://images.unsplash.com/photo-1625944526412-89403327825d?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:4,
                subCategory:'gulab jabun',
                cover:"https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ]
    },
    {
        id:4,
        category:"Households Items",
        subCategories:[
            {
                id:1,
                subCategory:'Pan',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:2,
                subCategory:'Spoon',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:3,
                subCategory:'Spoon',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            
        ]
    },
    {
        id:5,
        category:"Personal Care",
        subCategories:[
            {
                id:1,
                subCategory:'Treamer',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:2,
                subCategory:'Face Wash',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:3,
                subCategory:'Soap',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ]
    },
    {
        id:6,
        category:"Drinks",
        subCategories:[
            {
                id:1,
                subCategory:'Coffee',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:2,
                subCategory:'Cold Drinks',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:3,
                subCategory:'Glucose',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id:4,
                subCategory:'Glucose',
                cover:"https://images.unsplash.com/photo-1620878439728-a8f735a95e3f?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ]
    },
    
]
export default Categories ;