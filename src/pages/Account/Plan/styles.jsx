import styled from "styled-components";

export const PlanWrapper = styled.div`
  .card-wrapper {
    /* Specifically for cards in My Plan */
    &.active {
      .card {
        background: #46b13d;
        border-radius: 10px;
        color: #ffffff;
      }
    }
    .card {
      background: #ffffff;
      border-radius: 24px;
      box-shadow: none;
      .card-content {
        padding: 20px 24px;
        line-height: 21px;
        ul {
          li {
            display: flex;
            font-size: 14px;
            list-style-position: outside;
            margin: 12px 0;
            .marker {
              margin-right: 8px;
            }
          }
        }
        .price {
          .sign {
            font-size: 17px;
          }
          font-weight: bold;
          font-size: 23px;
          line-height: 25px;
          color: #181059;
          opacity: 0.96;
          margin: 12px 0;
        }
        .current-label {
          font-size: 20px;
          line-height: 30px;
          font-weight: 600;
          text-align: center;
          color: #1c7714;
        }
        .button {
          background: #ebf2ff;
          color: #3860ad;
          width: 100%;
          padding: 12px 0;
        }
      }
    }
  }
`;
