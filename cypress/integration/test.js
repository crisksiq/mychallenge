describe("My Bitso QA Challenge", function(){
    
    context('720p resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1280, 720)
        })
    
        it("Create Bitso Dev Account Mexico", function(){
            // You must  automate the following flow:
    
            // 1. Navigate to https://devmalta.bitso.com/register
            // cy.visit("https://devmalta.bitso.com/register")
    
            // 2. Create two accounts one using Mexico as a country
            // 2. a) Select Country as Mexico
            cy.get('.styles__Form-sc-1cll17m-4 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5').type('mex')
            cy.get('#react-select-2-option-142').each(($el, index, $list) => {
                if($el.text()==="Mexico"){
                    $el.click()
                }
            })
            // 2.b) Input email
            cy.get('#email').type("cris.ksiq19@gmail.com")
            // 2.c) Input password
            cy.get('#password').type("Bits*123")
            // 2.d) Complete password
            cy.get('#password_confirmation').type("Bits*123")
            // 2.e) Accept all checkboxes
            cy.get('[type="checkbox"]').should('not.be.visible').check({ force: true}).should('be.checked')
            // 2.f) Click Start button
            cy.get('.Container__StyledContainer-sc-1fkb9ns-0 > .styles__StyledButton-sc-1mfj3x4-0').click()
            
            // 3. Verify the accounts (manually)
            
        })
        it("Login Bitso Dev Account Mexico", function(){
            // 4. Login in using the first account created on https://devmalta.bitso.com
            // 4.a) Go to login page
            cy.visit("https://devmalta.bitso.com")
            // 4.b) Click on log in link
            cy.get('.LandingNavbar__NavLink-sc-1qogmf-9 > span').click()
            // 4.c) Input email
            cy.get('#client_id').type("cris.ksiq19@gmail.com")
            // 4.d) Input password
            cy.get('#password').type("Bits*123")
            // 4.e) Click on login button
            cy.get(':nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
            
            // I didn't received the phone validation code so to get to the main page I used the main url
            cy.visit("https://devmalta.bitso.com/wallet")
    
            // 5. On the wallet click on all cryptos (BTC, ETH, BCH.. etc) and verify the warning message displayed - Oops! Something went wrong
            // This transaction exceeds your limit. Increase your account limit to continue.
            
            cy.get(".wallet-bar-container").each(($el, index, $list) => {
                let title = ""
                let content = ""
                
                cy.log($el.text())
                $el.click()
                cy.get('.wallet-fund-button').eq(index+1).click()
                cy.get(".modal-title").then(function(modaltitle){
                    if(modaltitle.text()==="Which funding method?"){
                        cy.get(".close-btn").click()
                    }else{
                        cy.get("h3.Typography__H3-qw5r90-2").then(function(errorTitle){
                            title = errorTitle.text()
                        })
                        cy.get('.eJqlNJ > .Container__StyledContainer-sc-1fkb9ns-0 > .Typography__Small-qw5r90-8').then(function(errorDesc){
                            content = errorDesc.text()
                        })
        
                        if(title === "Oops! Something went wrong" && content === "This transaction exceeds your limit. Increase your account limit to continue."){
                            cy.log($el.text() + " PASSED")
                        }else{
                            cy.log($el.text() + " FAILED")
                        }
                        // 6. Close modal simulating esc key
                        cy.get(".modal-content").type('{esc}')
                        // cy.get('[data-testid=helper-modal-button]').click()
                    }
                })
            })
            
            // 7. Navigate to https://devmalta.bitso.com/r/user/beneficiarties/add
            cy.visit("https://devmalta.bitso.com/r/user/beneficiaries/add")
            // 8. Add a beneficiary 
            // 8.a) Input First Name
            cy.get("#first_name").type("Juan")
            // 8.b) Input Last Name
            cy.get("#last_name").type("Garcia")
            // 8.c) Input Second Last Name
            cy.get("#second_last_name").type("Hernandez")
            // 8.d) Input birth date
            cy.get("#dob").type("12/19/1989")
            // 8.e) Select kinship
            cy.get("#relationship").type('{downarrow}{enter}')
            // 8.f) Input percentage
            cy.get("#percentage").type("100")
            // 8.g) Click Add button
            cy.get("[data-testid='add-beneficiary-button']")
            // 8.h) Input PIN
            cy.get("#pin").type("123456")
            // 8.i) Click Confirm button
            cy.get("button").contains("Confirm").click()
        })
        it("Create Bitso Dev Account Argentina", function(){
            // You must  automate the following flow:
            // 1. Navigate to https://devmalta.bitso.com/register
            cy.visit("https://devmalta.bitso.com/register")
            
            // 2. Create two accounts one using Argentina as a country
            // 2. a) Select Country as Argentina
            cy.get('.styles__Form-sc-1cll17m-4 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5').type('arg')
            cy.get('#react-select-2-option-9').each(($el, index, $list) => {
                if($el.text()==="Argentina"){
                    $el.click()
                }
            })
            // 2.b) Write email
            cy.get('#email').type("hectorcristhian@hotmail.com")
            // 2.c) Write password
            cy.get('#password').type("Bits*123")
            // 2.d) Complete password
            cy.get('#password_confirmation').type("Bits*123")
            // 2.e) Accept all checkboxes
            cy.get('[type="checkbox"]').should('not.be.visible').check({ force: true}).should('be.checked')
            // 2.f) Click Start button
            cy.get('.Container__StyledContainer-sc-1fkb9ns-0 > .styles__StyledButton-sc-1mfj3x4-0').click()
            

            // 3. Verify the accounts (manually)
        })
        it("Login Bitso Dev Account", function(){
            // 4. Login in using the first account created on https://devmalta.bitso.com
            // 4.a) Go to login page
            cy.visit("https://devmalta.bitso.com")
            // 4.b) Click on log in link
            cy.get('.LandingNavbar__NavLink-sc-1qogmf-9 > span').click()
            // 4.c) Input email
            cy.get('#client_id').type("hectorcristhian@hotmail.com")
            // 4.d) Input password
            cy.get('#password').type("Bits*123")
            // 4.e) Click on login button
            cy.get(':nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()
            
            // I didn't received the phone validation code so to get to the main page I used the main url
            cy.visit("https://devmalta.bitso.com/wallet")
    
            // 5. On the wallet click on all cryptos (BTC, ETH, BCH.. etc) and verify the warning message displayed - Oops! Something went wrong
            // This transaction exceeds your limit. Increase your account limit to continue.
            
            cy.get(".wallet-bar-container").each(($el, index, $list) => {
                let title = ""
                let content = ""
                
                cy.log($el.text())
                $el.click()
                cy.get('.wallet-fund-button').eq(index+1).click()
                cy.get(".modal-title").then(function(modaltitle){
                    if(modaltitle.text()==="Which funding method?"){
                        cy.get(".close-btn").click()
                    }else{
                        cy.get("h3.Typography__H3-qw5r90-2").then(function(errorTitle){
                            title = errorTitle.text()
                        })
                        cy.get('.eJqlNJ > .Container__StyledContainer-sc-1fkb9ns-0 > .Typography__Small-qw5r90-8').then(function(errorDesc){
                            content = errorDesc.text()
                        })
        
                        if(title === "Oops! Something went wrong" && content === "This transaction exceeds your limit. Increase your account limit to continue."){
                            cy.log($el.text() + " PASSED")
                        }else{
                            cy.log($el.text() + " FAILED")
                        }
                        // 6. Close modal simulating esc key
                        cy.get(".modal-content").type('{esc}')
                        // cy.get('[data-testid=helper-modal-button]').click()
                    }
                })
            })
            
            // 7. Navigate to https://devmalta.bitso.com/r/user/beneficiarties/add
            cy.visit("https://devmalta.bitso.com/r/user/beneficiaries/add")
            // 8. Add a beneficiary 
            // 8.a) Input First Name
            cy.get("#first_name").type("Maria")
            // 8.b) Input Last Name
            cy.get("#last_name").type("Sambueza")
            // 8.c) Input Second Last Name
            cy.get("#second_last_name").type("Cuccitini")
            // 8.d) Input birth date
            cy.get("#dob").type("03/23/1994")
            // 8.e) Select kinship
            cy.get("#relationship").type('{downarrow}{enter}')
            // 8.f) Input percentage
            cy.get("#percentage").type("100")
            // 8.g) Click Add button
            cy.get("[data-testid='add-beneficiary-button']")
            // 8.h) Input PIN
            cy.get("#pin").type("123456")
            // 8.i) Click Confirm button
            cy.get("button").contains("Confirm").click()
        })
      })
    
    
})
