import React from "react";
import styled, { css } from "styled-components";

import { FilterBar as FilterInput } from "components/common/filterBar/FilterBar";
import ListFilter from "./ListFilter";

function IssueListPage() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {/* 기본 컴포넌트 구성 
      <TabBar></TabBar>
      <IssueList>
      <IssueCards>
      <IssuCard></IssuCard>
      </IssueCards>
    </IssueList> */}
      <FilterInput
        menuList={{
          title: "test",
          items: [{ text: "testText" }],
        }}
        inputDisplay="none"
        text="test"
      />
      <ListFilter />
    </>
  );
}

export default IssueListPage;
