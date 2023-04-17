import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            placeat voluptates quibusdam tempore inventore vitae ipsa beatae.
            Esse, ut omnis repellat repudiandae sequi quasi laborum alias
            architecto consequuntur consequatur unde natus recusandae saepe!
            Laboriosam quas tenetur rerum placeat inventore ad mollitia. Placeat
            sed hic officiis fugit quisquam exercitationem reprehenderit ipsam
            vel ratione suscipit animi possimus voluptatem, aspernatur, ad at a
            repellendus modi aliquam eligendi enim labore totam omnis, facere
            quasi. Dolorem totam ullam necessitatibus ipsum fugiat iusto illum
            blanditiis itaque iure facilis dignissimos cumque reprehenderit,
            optio nam unde consequuntur ratione asperiores delectus et. Placeat
            quibusdam quaerat excepturi accusamus fugiat doloremque!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
