import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../redux/store';
import { TaskPage } from '../pages';
import styled from '@emotion/styled';
import { Provider } from 'react-redux';
import { Header, Footer } from '../commons/components';

const App = () => {

  return (    
    <Router>
      <Provider store={ store }>
        <ContainerApp>          
          <Header />
            <ContentApp>
              <Switch>      
                <Route exact path='/' component={ TaskPage } />
              </Switch>  
            </ContentApp> 
          <Footer />   
        </ContainerApp>
      </Provider>
    </Router>
  );
}


///////////////////////  STYLE COMPONENT  ///////////////////////////////

const ContainerApp = styled.div`
  height: 100vh;
  background: rgb(75,137,217);
  background: 
    linear-gradient(0deg, 
    rgba(75,137,217,0.700717787114846) 34%, 
    rgba(1,154,190,0.7203256302521008) 68%, 
    rgba(19,157,186,0.7399334733893557) 91%)
  ;
`;

const ContentApp = styled.div`
  
`;

/////////////////////////////////////////////////////////////////



export default App;