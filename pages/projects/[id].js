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
                    width: 80vw;

                    .pageTitle {
                        text-align: center;
                        font-size: 2rem;
                    }

                    p span {
                    }
                    img {
                        margin: auto;
                        width: 50%;
                    }
                 
                    a:hover {
                        text-decoration: underline;
                    }
                `}
            >
                <h1 className="pageTitle">{projectData.title}</h1>

                <div
                    css={css`
                        display: flex;
                        justify-content: space-evenly;
                    `}
                >
                    {projectData.github && (
                        <p>
                            <span>Link to Github: </span>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={projectData.github}
                            >
                                {projectData.github}
                            </a>
                        </p>
                    )}
                    {projectData.live && (
                        <p>
                            <span>Live: </span>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={projectData.live}
                            >
                                {projectData.live}
                            </a>
                        </p>
                    )}
                </div>
                <ReactMarkdown>{projectData.content}</ReactMarkdown>
                <div
                    css={css`
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img {
                            width: 75%;
                            margin: 0 auto;
                        }
                    `}
                >
                    <img
                        src={`/projects/${projectData.id}/capture.png`}
                        alt="project preview image"
                    />
                </div>
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
