import React, { Component } from 'react';

class Resume extends Component {
  render() {

    const skills = [
      { name: '機械学習', description: '画像認識 / 時系列解析' },
      { name: '力学系', description: '統計学 / 時系列解析 / 幾何学 / 解析学' },
      { name: 'AWS (バックエンド)', description: 'SageMaker(機械学習) / GraphQL(クエリ言語) / APIGateway(RESTfulAPI) / S3(ファイルサーバー) / DynamoDB(データベース) / Cognito(認証) / Lambda(サーバレスコンピューティング) / EC2(仮想サーバー) / Amplify(フルスタックのアプリ開発)'},
      { name: 'フロントエンド', description: 'React(フロントエンド開発) / Unity(ゲーム開発)'},
      { name: '言語', description: 'Python / Javascript / C# / Fortran / Julia / Mathematica'},
    ];

    return (
      <section id="skill">

        <div className="row work">

          <div className="three columns header-col">
            <h1><span> できること </span></h1>
          </div>

          <div className="nine columns main-col">
            {skills.map((skill) => (
              <div><h3>{skill.name}</h3>
                <p className="newline">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  }
}
export default Resume;
