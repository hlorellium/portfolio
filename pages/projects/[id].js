import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';

import { getAllProjectsIds, getProjectData } from '../../utils/projects';

const Project = ({ projectData }) => {
    return (
        <>
            <Head>
                <title>{projectData.title}</title>
            </Head>

            <article
                css={css`
                    max-width: 80vw;

                    .pageTitle {
                        text-align: center;
                        font-size: 2rem;
                    }

                    img {
                        max-width: 80%;
                    }
                    a {
                        text-decoration: underline;
                    }
                `}
            >
                <h1 className="pageTitle">{projectData.title}</h1>

                <ReactMarkdown>{projectData.content}</ReactMarkdown>
            </article>
        </>
    );
};

export default Project;

export const getStaticPaths = async () => {
    const paths = getAllProjectsIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData,
        },
    };
};
