
/// <reference types="Cypress" />

import {addTodo, checklabel} from "../actions/todo-mvc.action" //o ../ está voltndo uma pasta


describe ('lista de tarefas TODOS', ()=>{

beforeEach(()=> {//para inserir funções que repetem no código

    cy.visit('http://todomvc.com/examples/angular2/')
})


it('adicionar tarefa', ()=>{

    addTodo('aprender cypress')
    checkLabel('aprender cypress')

    })
    
it('remover tarefa', ()=>{

        addTodo('aprender cypress')
        cy.get('label').should('have.text','aprender cypress')
        cy.get('.destroy').click({force:true})
        cy.get('.todo-list').should('not.have.descendants', 'li')

        })

it('verificar tarefa marcada e com texto cortado', () =>{

        addTodo('aprender cypress')
        cy.get('.toggle').click()
        cy.get('.toggle').should('be.checked')
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    }) 

})