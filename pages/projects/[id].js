import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';
import { ReactComponent as GithubIcon } from '../../public/icons/github.svg';
import { ReactComponent as UrlIcon } from '../../public/icons/url.svg';

import { getAllProjectsIds, getProjectData } from '../../utils/projects';
import ArticleLink from '../../components/articleLink';

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
                        font-size: 5rem;
                    }

                    img {
                        margin: auto;
                        width: 100%;
                    }

                    @media (max-width: 900px) {
                        .pageTitle {
                            font-size: 3rem;
                        }
                    }
                `}
            >
                <div
                    css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                        @media (max-width: 900px) {
                            flex-direction: column;
                            align-items: start;
                        }
                    `}
                >
                    <h1 className="pageTitle">{projectData.title}</h1>

                    <div
                        css={css`
                            display: flex;
                            flex-direction: column;
                            margin-bottom: 3rem;
                        `}
                    >
                        {projectData.github && (
                            <ArticleLink
                                icon={<GithubIcon />}
                                url={projectData.github}
                            />
                        )}

                        {projectData.live && (
                            <ArticleLink
                                icon={<UrlIcon />}
                                url={projectData.live}
                            />
                        )}
                    </div>
                </div>
                <ReactMarkdown
                    // css={css`
                    //     width: 40%;
                    //     margin: 0 auto;
                    // `}
                >
                    {projectData.content}
                </ReactMarkdown>
                <div
                    css={css`
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img {
                            width: 100%;
                            margin: 1em auto;
                        }
                        margin-bottom: 3em;
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
