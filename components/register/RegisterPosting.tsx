// 글을 등록하는 컴포넌트
import React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import palette from "../../styles/palette";
import Selector from "../common/Selector";
import { worryOfKind } from "../../lib/staticData";
import { useSelector } from "../../store";
import { postingActions } from "../../store/posting";
import RadioGroup from "../common/RadioGroup";
import RegisterPostingFooter from "./footer/RegisterPostingFooter";

const Container = styled.div`
  padding: 62px 30px 100px;
  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }
  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }
  .register-posting-wrapper {
    width: 320px;
    margin-bottom: 32px;
  }
  .anonymous-posting-radio {
    max-width: 485px;
    margin-bottom: 50px;
  }
`;

const options = ["선택해주세요."];

const RegisterWriting: React.FC = () => {
  const dispatch = useDispatch();

  //고민 대분류
  const mainCategoryType = useSelector(
    (state) => state.posting.mainCategoryType
  );

  //고민 소분류
  const subCategoryType = useSelector((state) => state.posting.subCategoryType);

  //익명 타입
  const anonymousType = useSelector((state) => state.posting.anonymousType);

  //고민 대분류 유형 변경시
  const onChangeMainCategoryType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(postingActions.setMainCategoryType(event.target.value));
  };

  //고민 대분류 유형 변경시 소분류 설정
  const onChangeSubCategoryType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(postingActions.setSubCategoryType(event.target.value));
  }; //대분류 안의 소분류 options
  const subCategoryOptions = useMemo(() => {
    switch (mainCategoryType) {
      case "a": {
        const { aTypelist } = require("../../lib/staticData");
        dispatch(postingActions.setSubCategoryType(aTypelist[0]));
        return aTypelist;
      }
      case "b": {
        const { bTypelist } = require("../../lib/staticData");
        dispatch(postingActions.setSubCategoryType(bTypelist[0]));
        return bTypelist;
      }
      case "c": {
        const { cTypelist } = require("../../lib/staticData");
        dispatch(postingActions.setSubCategoryType(cTypelist[0]));
        return cTypelist;
      }
      case "d": {
        const { dTypelist } = require("../../lib/staticData");
        dispatch(postingActions.setSubCategoryType(dTypelist[0]));
        return dTypelist;
      }
      default:
        return [];
    }
  }, [mainCategoryType]);

  //익명 options
  const anonymousTypeRadioOptions = [
    {
      label: "익명으로 할게요",
      value: "anonymous",
      description: "이름을 밝히고 싶지 않을 때 사용해요",
    },
    {
      label: "닉네임으로 할게요",
      value: "nickname",
      description: "닉네임으로 활동하고 싶을 때 사용해요",
    },
    {
      label: "이메일으로 할게요",
      value: "email",
      description: "이메일로 따로 도움을 받고 싶을 때 사용해요",
    },
  ];

  //익명 타입 변경시
  const onChangeAnonymousType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = event;
    dispatch(
      postingActions.setAnonymousType(
        selected as unknown as "anonymous" | "nickname" | "email"
      )
    );
  };

  //모든 값이 있는지 확인하기
  const isValid = useMemo(() => {
    if (!mainCategoryType || !subCategoryOptions || !anonymousType) {
      return false;
    }
    return true;
  }, [mainCategoryType, subCategoryOptions, anonymousType]);

  return (
    <Container>
      <h2>어떤 고민이 있어요?</h2>
      <h3>힘들다 그쵸?</h3>
      <div className="register-posting-wrapper">
        <Selector
          isValid={!!mainCategoryType}
          type="register"
          value={mainCategoryType || undefined}
          defaultValue="하나를 선택해주세요."
          disabledOptions={options}
          label="우선 뭐가 힘든지 말해볼래요?"
          options={worryOfKind}
          onChange={onChangeMainCategoryType}
        />
      </div>
      <div className="register-posting-wrapper">
        {mainCategoryType && (
          <Selector
            isValid={!!subCategoryType}
            type="register"
            value={subCategoryType || undefined}
            defaultValue="하나를 선택해주세요."
            disabled={!mainCategoryType}
            label="좀 더 자세하게 알려주세요"
            options={subCategoryOptions}
            onChange={onChangeSubCategoryType}
          />
        )}
      </div>
      {subCategoryType && (
        <div className="anonymous-posting-radio">
          <RadioGroup
            isValid={!!anonymousType}
            label="어떻게 말하고 싶어요?"
            value={anonymousType}
            options={anonymousTypeRadioOptions}
            onChange={onChangeAnonymousType}
          />
        </div>
      )}
      <RegisterPostingFooter
        isValid={false}
        prevHref="/"
        nextHref="/board/post/postingText"
      />
    </Container>
  );
};

export default RegisterWriting;
