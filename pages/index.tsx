import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import BodyItem from '@components/BodyItem';
import Link from 'next/link';

const TopSection = tw.div`
  pt-10
  px-10
  pb-44
  bg-mainPage
  bg-cover

`;
const TopContentContainer = tw.div`
  flex
  lg:justify-between
  lg:items-center
  flex-wrap
  max-w-screen-lg
  mx-auto
`;

const HeadSection = tw.section`
  w-full
  lg:w-auto
`;
const ImageSection = tw.section`
  hidden
  lg:block
`;

const TitleContainer = tw.div`
mt-40
sm:mt-0
`;
const BigTitle = tw.div`
  text-white
  text-2xl
  font-normal
  break-words
  text-center
`;
const SubText = tw.div`
  pt-7
  text-white
  font-light
  text-lg
  text-center
  text-shadow-xl
  pb-7
`;
const ButotnContainer = tw.div``;
const ContactBtn = tw.button`
  bg-[#FF3E53]
  w-full
  rounded-md
  py-3
  mb-3
  text-white
  font-bold
  cursor-pointer
hover:bg-red-500
  transition-all
  duration-300
  active:bg-red-400
`;

const ImageContainer = tw.div`
  relative
  `;

const BodySection = tw.section`
  space-y-16
  bg-mainColor
`;

const MessageSection = tw.section`
  bg-red-50
  mt-20
  flex
  justify-between
  flex-wrap
`;

const MessageContentContainer = tw.div`
  max-w-7xl
  px-10
  lg:pl-40
  pt-10
  pb-10

`;

const MessageTitle = tw.h1`
  font-normal
  text-2xl
  mb-7
`;

const MessageSubtitle = tw.div`
  text-slate-500
  font-normal
`;

const MessageSubtitleHead = tw.h3`
  pb-1 font-medium text-slate-900`;
const MessaegSubtitleContent = tw.p`
`;

const MessageImgContainer = tw.div`
  w-full
  md:w-96
  h-60
  relative
`;

const MiddleSection = tw.section`
  bg-mainColor
  pt-6
  pb-20
`;
const MiddleMessageItem = tw.div`
bg-white
mx-3
py-3
`;
const MiddleMessageInner = tw.div`
  mx-3
  px-7
  py-7
  border-2
`;
const MiddleMessageImgContainer = tw.div`
mb-5
`;
const MiddleMessageTitle1Contianer = tw.div`
text-lg
font-bold
text-center
`;
const MiddleMessageTitle2Container = tw.div`
  mt-2
  mb-3
  text-2xl
  text-center
  font-light
`;
const MiddleMessageContents = tw.div`
  text-center
  font-light
`;

const SingListTitleContainer = tw.div`
  bg-secondColor
  py-2
`;
const SingListTitleInner = tw.div`
  text-center
  border-y
  py-10
  text-white
  border-stone-400
`;
const SingListTitle = tw.div`
`;

const ReasonContainer = tw.div`
space-y-10
pb-20
`;
const ReasonItem = tw.div`
`;
const ReasonImgContainer = tw.div`
  mx-10
  -mb-16
`;
const ReasonTitleContainer = tw.div`
pt-20
text-white
mx-5
px-5
pb-10
text-center
`;

const Home: NextPage = () => {
  return (
    <>
      <TopSection>
        <TopContentContainer>
          <HeadSection>
            <TitleContainer>
              <BigTitle>
                <h1>진정한 축가를 보여드리겠습니다.</h1>
              </BigTitle>
              <SubText>
                신랑신부에게 감동을 주면서
                <br />
                신랑신부에게 주인공으로 만들어줄 노래를 해야합니다.
                <br />
                또한 하객들로부터 축하의 마음을 전할수도 있어야 하죠.
              </SubText>
            </TitleContainer>
          </HeadSection>
        </TopContentContainer>
      </TopSection>
      <MiddleSection>
        <MiddleMessageItem>
          <MiddleMessageInner>
            <MiddleMessageImgContainer>
              <Image
                src='/9.jpeg'
                width='800'
                height='800'
                objectFit='cover'
                className='rounded-t-full'
              />
            </MiddleMessageImgContainer>
            <MiddleMessageTitle1Contianer>
              <h2>진정성과 실력으로 노래하는 사람</h2>
            </MiddleMessageTitle1Contianer>
            <MiddleMessageTitle2Container>
              <h3>안녕하세요. 저는 감동을 노래하는 사람입니다.</h3>
            </MiddleMessageTitle2Container>
            <MiddleMessageContents>
              노래를 좋아했지만 사정상 가수를 직업으로 삼을 순 없었습니다.
              <br />
              하지만 친척들과 친구들의 결혼식이면 항상 나서서 축가를
              불러주었습니다.
              <br />
              하객들로부터 지금까지 들은 축가중에 최고였다고 찬사를 들었습니다.
              <br />
              가수를 꿈꾸진 못했지만 그 순간만큼은 너무나도 큰 행복이었고,
              누군가에게 행복부 주었다는 것 또한 감동이었습니다.
              <br />
              이제 그 감동을 더 많은 분들과 나누려고 합니다.
            </MiddleMessageContents>
          </MiddleMessageInner>
        </MiddleMessageItem>
      </MiddleSection>
      <BodySection>
        <SingListTitleContainer>
          <SingListTitleInner>
            <SingListTitle>
              <h2 className='text-xs font-light'>왜 저를 선택해야 할까요?</h2>
              <h3 className='mt-2 text-2xl font-light'>
                다른 축가 가수들과 다른 이유
              </h3>
            </SingListTitle>
          </SingListTitleInner>
        </SingListTitleContainer>
        <ReasonContainer>
          <ReasonItem>
            <ReasonImgContainer>
              <Image
                src='/6.jpg'
                width='600'
                height='600'
                objectFit='cover'
                className='rounded-3xl'
              />
            </ReasonImgContainer>
            <ReasonTitleContainer className='bg-thirdColor'>
              <h3 className='pb-5 text-2xl font-light'>
                영상을 만들어드립니다.
              </h3>
              <p className='font-light'>
                사진만 주시면 감동이 배가 될<br />
                영상을 만들어드립니다.
                <br />
                영상은 식장에서
                <br />
                축가와 함께 보여지게 됩니다.
                <br />
                신랑 신부는 물론 하객들도 함께
                <br />
                감동을 느낄 수 있습니다.
              </p>
            </ReasonTitleContainer>
          </ReasonItem>
          <ReasonItem>
            <ReasonImgContainer>
              <Image
                src='/1.JPG'
                width='600'
                height='600'
                objectFit='cover'
                className='rounded-3xl'
              />
            </ReasonImgContainer>
            <ReasonTitleContainer className='bg-fourthColor text-shadow-sm'>
              <h3 className='pb-5 text-2xl font-light'>
                신랑 신부가 진정으로 축하 받을 수 있는 노래를 불러드립니다.
              </h3>
              <p className='font-light'>
                축가를 부르는 가수는 노래도 노래지만
                <br />
                신랑 신부에게 감동을 주면서
                <br />
                신랑 신부를 주인공을 만들어 줄 노래를 해야합니다.
                <br />
                평생 한번 분인 결혼식.
                <br />
                평생 잊지 못할 감동으로 만들어드리겠습니다.
              </p>
            </ReasonTitleContainer>
          </ReasonItem>
          <ReasonItem>
            <ReasonImgContainer>
              <Image
                src='/7.JPG'
                width='600'
                height='600'
                objectFit='cover'
                className='rounded-3xl'
              />
            </ReasonImgContainer>
            <ReasonTitleContainer className='bg-fifthColor'>
              <h3 className='pb-5 text-2xl font-light'>
                식장에 한시간 먼저 가 있겠습니다
              </h3>
              <p className='font-light'>
                기본이지만 기본이 안지켜질 때가 있습니다.
                <br />
                미리 식장에 도착해 현장 동선, 리허설까지
                <br />
                모두 완벽하게 진행합니다.
              </p>
            </ReasonTitleContainer>
          </ReasonItem>
        </ReasonContainer>
      </BodySection>
      <MessageSection>
        <MessageImgContainer>
          <Image
            src='/2.JPG'
            alt='move yourself'
            layout='fill'
            objectFit='cover'
            // width={800}
            // height={600}
          />
        </MessageImgContainer>
      </MessageSection>
    </>
  );
};

export default Home;
