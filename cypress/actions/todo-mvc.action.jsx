export function addTodo(text)  {  //exporta a função
    cy.get('.new-todo').type(text+ '{enter}')
} 

export function checkLabel (text){
    cy.get('label').should('have.text','aprender cypress')
}

export function deleteTodo(){
    cy.get('.destroy').click({force:true})
}

export function empityTodo(){
    cy.get('.todo-list').should('not.have.descendants', 'li')
}

export function checkTodo(){
    cy.get('.toggle').click()
}
export function isChecked(){
    
}