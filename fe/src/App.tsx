import React from "react";

import Input from "components/common/Input";
import TextArea from "components/common/TextArea";
import IssueListPage from "components/issueListPage/IssueListPage";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div>
        <IssueListPage />
        {/* <TextArea type="filled" /> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
