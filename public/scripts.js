function onOff(){	
  document.querySelector("#modal").classList.toggle("hide");	

  document.querySelector("body").classList.toggle("hideScroll");	

  document.querySelector("#modal").classList.toggle("addScroll");	
}	

function checkFiels(event) {	

  const valuesToCheck = [	
    "title",	
    "image",	
    "category",	
    "description",	
    "link"	
  ]	

  const isEmpty = valuesToCheck.find((value) => {	
    const checkIsString = typeof event.target[value].value === "string";	
    const checkIfIsEmpty = !event.target[value].value.trim();	

    if( checkIsString && checkIfIsEmpty) {	
      return true;	
    }	
  });	

  if(isEmpty) {	
    event.preventDefault();	
    alert("Por favor preencher todos os campos")	
  }	
};	

function delIdeia(id) {	
  db.run(`DELETE FROM ideas WHERE id = ?`, [id], function(err){	
    if(err) return console.log(err);	

    console.log("Deletado");	
  })	
}